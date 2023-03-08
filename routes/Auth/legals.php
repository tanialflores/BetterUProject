<?php

use Illuminate\Support\Facades\Route;

Route::get('/legals', function () { return view('main.index');});
Route::get('/legals/terms-conditions', function () { return view('main.index');});
Route::get('/legals/privacy-policies', function () { return view('main.index');});
Route::get('/legals/frecuent-questions', function () { return view('main.index');});