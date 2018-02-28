<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use \Exception;
use Illuminate\Support\Facades\Auth;
use PharIo\Manifest\Application;

class UserController extends Controller
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

    public function getUserData(Request $request)
    {
        try {
            $user = Auth::user();
            $data = $user->first()->toArray();
            foreach($user->roles()->get() as $role) {
                $data['roles'][] = $role->name;
            }

            return response()->json(['status' => true, 'data' => $data]);
        } catch (Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }
}