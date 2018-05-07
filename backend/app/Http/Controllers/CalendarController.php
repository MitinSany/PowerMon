<?php

namespace App\Http\Controllers;

use App\Models\CalendarDay;
use App\Models\Email;
use App\Models\Phone;
use \BadMethodCallException;
use Illuminate\Http\Request;
use \Exception;
use Illuminate\Support\Facades\Auth;

class CalendarController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public static function loadNestedData(CalendarDay $record)
    {
        $result = $record->toArray();
        $result['phones'] = $record->phones()->get()->toArray();
        return $result;
    }

    public function all(Request $request)
    {
        $day = new \DateInterval('P1D');
        $startDate = new \DateTime('now - ' . CalendarDay::DAYS_BEFORE . 'days');

        /**
         * @var $record CalendarDay
         * @var $phone Phone
         */

        $records = CalendarDay::where('date', '>=', $startDate)->get()->map([$this, 'loadNestedData']);


        $dates = $records->map(function ($item) {
            return $item['date'];
        });

        for ($i = 0; $i < CalendarDay::TOTAL_DAYS; $i++) {
            $startDate->add($day);
            $date = $startDate->format('Y-m-d');

            if (!$dates->contains($date)) {
                $calendarDay = new CalendarDay();
                $calendarDay->date = $date;
                $calendarDay->save();
                $records[] = $this->loadNestedData($calendarDay);
            }

        }

        return response()->json(['success' => true, 'data' => $records, 'total' => count($records)]);
    }

    public function read(int $id)
    {
        $switch = CalendarDay::findOrFail($id);
        $records[] = self::loadNestedData($switch);
        return response()->json(['success' => true, 'data' => $records, 'total' => count($records)]);
    }

    protected function createUpdate(CalendarDay $switch, array $data)
    {
        /*try {

        } catch ()*/
        $switch->fill($data);
        $switch->save();
        $switch->toManySync('email', $data['emails']);
        $switch->toManySync('phone', $data['phones']);
        return $this->read($switch->id);
    }

    public function create(Request $request)
    {
        $input = $request->all();
        if (!array_key_exists('data', $input)) {
            throw new BadMethodCallException('Missting "data" field');
        }
        $data = $input['data'];
        /**
         * @var $switch CalendarDay
         */
        $switch = new CalendarDay();
        return $this->createUpdate($switch, $data);
    }

    public function update(Request $request)
    {
        $input = $request->all();
        if (!array_key_exists('data', $input)) {
            throw new BadMethodCallException('Missting "data" field');
        }
        $data = $input['data'];
        /**
         * @var $switch CalendarDay
         */
        $switch = CalendarDay::findOrFail($data['id']);
        return $this->createUpdate($switch, $data);
    }

    public function delete(Request $request)
    {
        $input = $request->all();
        if (!array_key_exists('data', $input) || !array_key_exists('id', $input['data'])) {
            throw new BadMethodCallException('Missting "data" field');
        }
        $data = $input['data'];
        /**
         * @var $switch CalendarDay
         */
        $deleteCount = CalendarDay::destroy($data['id']);
        return response()->json(['success' => $deleteCount > 0]);
    }
}