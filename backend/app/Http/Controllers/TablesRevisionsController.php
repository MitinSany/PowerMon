<?php

namespace App\Http\Controllers;


use App\Models\TablesRevision;
use Illuminate\Http\Request;

class TablesRevisionsController extends Controller
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
        $records = TablesRevision::all();
        return response()->json(['success' => true, 'data' => $records, 'total' => count($records)]);
    }
}