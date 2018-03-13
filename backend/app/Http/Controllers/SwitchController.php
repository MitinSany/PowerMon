<?php

namespace App\Http\Controllers;

use App\Models\DevSwitch;
use App\Models\Email;
use App\Models\Phone;
use Laravel\Lumen\Exceptions\BadMethodCallException;
use Illuminate\Http\Request;
use \Exception;
use Illuminate\Support\Facades\Auth;

class SwitchController extends Controller
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

    public static function getNestedData(DevSwitch $record) {
        $result = $record->toArray();
        $result['emails'] = $record->emails()->get()->toArray();
        $result['phones'] = $record->phones()->get()->toArray();
        return $result;
    }

    public function all(Request $request) {
        /**
         * @var $record DevSwitch
         * @var $email Email
         * @var $phone Phone
         */
        $records = DevSwitch::all()->map([$this, 'getNestedData']);

        return response()->json(['success' => true, 'data' => $records, 'total' => count($records)]);
    }

    public function read(int $id)
    {
        $switch = DevSwitch::findOrFail($id);
        $records[]=self::getNestedData($switch);
        return response()->json(['success' => true, 'data' => $records, 'total' => count($records)]);
    }

    protected function createUpdate(DevSwitch $switch, array $data) {
        $switch->fill($data);
        $switch->save();
        $switch->toManySync('email', $data['emails']);
        $switch->toManySync('phone', $data['phones']);
        return $this->read($switch->id);
    }

    public function create(Request $request)
    {
        $input = $request->all();
        if (!array_key_exists('data', $input) || !array_key_exists('id', $input['data'])) {
            throw new BadMethodCallException('Missting "data" field');
        }
        $data = $input['data'];
        /**
         * @var $switch DevSwitch
         */
        $switch = new DevSwitch();
        return $this->createUpdate($switch, $data);
    }

    public function update(Request $request)
    {
        $input = $request->all();
        if (!array_key_exists('data', $input) || !array_key_exists('id', $input['data'])) {
            throw new BadMethodCallException('Missting "data" field');
        }
        $data = $input['data'];
        /**
         * @var $switch DevSwitch
         */
        $switch = DevSwitch::findOrFail($data['id']);
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
         * @var $switch DevSwitch
         */
        $deleteCount = DevSwitch::destroy($data['id']);
        return response()->json(['success' => $deleteCount > 0]);
    }
}