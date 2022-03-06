<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
session_start();

class LoginController extends Controller
{
    public function index(Request $request){
        return view('login');

    }
    public function pegaValores(Request $request){
        echo "foi";
        $result = $request->all();
        $email = $result['email'];
        $senha = $result['senha'];
        $user = DB::table('users')->where('nome', 'ds')->get();
        /*$users = DB::table('users')
            ->select(DB::raw('*'))
            ->get();*/
    }
}
