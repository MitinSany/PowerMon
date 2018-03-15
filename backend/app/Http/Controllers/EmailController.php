<?php

namespace App\Http\Controllers;


use App\Models\Email;
use http\Exception\BadMethodCallException;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class EmailController extends Controller
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
        $records = Email::all();
        return response()->json(['success' => true, 'data' => $records, 'total' => count($records)]);
    }

    protected function createUpdate(Email $switch, array $data)
    {
        /*try {

        } catch ()*/
        $switch->fill($data);
        $switch->save();
        $switch->toManySync('email', $data['emails']);
        $switch->toManySync('phone', $data['phones']);
        //return $this->read($switch->id);
    }

    public function create(Request $request)
    {
        $input = $request->all();
        if (!array_key_exists('data', $input)) {
            throw new BadMethodCallException('Missting "data" field');
        }

        /**
         * @var $switch Email
         */
        foreach($input['data'] as $dataItem){
            $switch = new Email();
            $this->createUpdate($switch, $dataItem);
        }
        return response()->json(['success' => true]);
    }

/*    public function update(Email $request)
    {
        $input = $request->all();
        if (!array_key_exists('data', $input) || !array_key_exists('id', $input['data'])) {
            throw new BadMethodCallException('Missting "data" field');
        }
        $data = $input['data'];
        /**
         * @var $switch DevSwitch
         *
        $switch = Email::findOrFail($data['id']);
        return $this->createUpdate($switch, $data);
    }*/
}