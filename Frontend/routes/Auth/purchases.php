<?php

use Illuminate\Support\Facades\Route;

Route::get('/purchases', function () { return view('main.index');});
Route::get('/purchases/rate-experience/{id}', function () { return view('main.index');});
Route::get('/purchases/receipt/{id}/{type}', function () { return view('main.index');});
Route::get('/purchases/reschedule/{id}', function () { return view('main.index');});
Route::get('/purchases/receipt-product/{id}/{type}', function () { return view('main.index');});
Route::get('/purchases/chat/{id}', function () { return view('main.index');});