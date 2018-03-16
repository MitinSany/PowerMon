<?php

namespace App\Http\Controllers;


use App\Models\Email;
use App\Models\Phone;
use http\Exception\BadMethodCallException;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class PhoneController extends Controller
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

    public function all(Request $request)
    {
        $records = Phone::all();
        return response()->json(['success' => true, 'data' => $records, 'total' => count($records)]);
    }

    protected function createUpdate(Phone $phone, array $data)
    {
        if (!array_key_exists('phone', $data) || trim($data['phone']) == '') {
            return false;
        }

        $phone->fill($data);
        $phone->save();
        return $phone;
    }

    public function create(Request $request)
    {
        $input = $request->all();
        if (!array_key_exists('data', $input)) {
            throw new BadMethodCallException('Missting "data" field');
        }

        $phones = [];

        /**
         * @var $phone Email
         */
        foreach ($input['data'] as $dataItem) {
            $phone = new Phone();
            if (array_key_exists('id', $dataItem) && $dataItem['id'] === 0 && $this->createUpdate($phone, $dataItem)) {
                $phones[] = $phone;
            }
        }
        return response()->json(['success' => true, 'data' => $phones, 'count' => count($phones)]);
    }
}