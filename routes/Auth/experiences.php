<?php

use Illuminate\Support\Facades\Route;

Route::get('/experiences', function () { return view('main.index');});
Route::get('/experiences/view', function () { return view('main.index');});
Route::get('/experiences/{id}', function () { return view('main.index');});
Route::get('/experiences/reserve/{id}', function () { return view('main.index');});
Route::get('/experiences/new-reserve/{id}', function () { return view('main.index');});
Route::get('/experiences/payment-method/{id}', function () { return view('main.index');});
