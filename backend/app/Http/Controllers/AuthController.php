<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller
{
    /**
     * @var \Tymon\JWTAuth\JWTAuth
     */
    protected $jwt;

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    public function postLogin(Request $request)
    {
        $this->validate($request, [
            'login'    => 'required|max:255',
            'password' => 'required',
        ]);

        try {

            if (! $token = $this->jwt->attempt($request->only('login', 'password'))) {
                return response()->json(['status' => false, 'message' => 'User not found'], 404);
            }

        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['status' => false, 'message' => 'token expired'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['status' => false, 'message' => 'token invalid'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['status' => false, 'message' => 'token absent ' . $e->getMessage()], 500);

        }

        return response()->json(['status' => true, 'token' => $token]);
    }
}
