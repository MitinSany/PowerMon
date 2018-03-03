<?php

namespace App\Http\Controllers;

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

    public function read(Request $request)
    {
        $data[] = [
            'id' => 1,
            'technical_site_name' => 'tp-sdwsd',
            'snmp_status' => 2,
            'email1' => 'qq',
            'emails' => [['id' => 1], ['id' => 2]]
        ];


        return response()->json(['success' => true, 'data' => $data, 'total' => count($data)]);
        try {
            $user = Auth::user();
            $data = $user->first()->toArray();
            foreach ($user->roles()->get() as $role) {
                $data['roles'][] = $role->name;
            }

            return response()->json(['status' => true, 'data' => $data]);
        } catch (Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }
}