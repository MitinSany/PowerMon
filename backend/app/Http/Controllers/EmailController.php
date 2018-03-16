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

    protected function createUpdate(Email $email, array $data)
    {
        if (!array_key_exists('email', $data) || trim($data['email']) == '') {
            return false;
        }

        $email->fill($data);
        $email->save();
        return $email;
    }

    public function create(Request $request)
    {
        $input = $request->all();
        if (!array_key_exists('data', $input)) {
            throw new BadMethodCallException('Missting "data" field');
        }

        $emails = [];

        /**
         * @var $email Email
         */
        foreach ($input['data'] as $dataItem) {
            $email = new Email();
            if (array_key_exists('id', $dataItem) && $dataItem['id'] === 0 && $this->createUpdate($email, $dataItem)) {
                $emails[] = $email;
            }
        }
        return response()->json(['success' => true, 'data' => $emails, 'count' => count($emails)]);
    }
}