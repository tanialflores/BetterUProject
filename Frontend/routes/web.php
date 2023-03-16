<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;


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


// Route::middleware('route.mapping')->group(function () {

  

// });

require (__DIR__ . '/Guest.php');
require (__DIR__ . '/Auth.php');

Route::get('/correo-anfitrion', function () {  return view('email.emailAnfitrion');})->name("home");
Route::get('/code-validation', function () {  return view('email.codeValidation');})->name("home");
Route::get('/recover-password', function () {  return view('email.recoverPassword');})->name("home");
Route::get('/verification-code', function () {  return view('email.verificationCode');})->name("home");

