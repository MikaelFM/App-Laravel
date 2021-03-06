<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/*Route::get('/login', function (){
    return view('login');
});*/
Route::get('/cadastro', function (){
    return view('cadastro');
});
Route::get('/info', function (){
    phpinfo();
});
Route::get('/login', [LoginController::class, 'index']);
Route::get('/', [LoginController::class, 'index']);
Route::post('/loginGetValue', [LoginController::class, 'pegaValores']);
