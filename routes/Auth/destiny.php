<?php

use Illuminate\Support\Facades\Route;

Route::get('/destiny', function () { return view('main.index');});
Route::get('/destiny/show/{id}', function () { return view('main.index');});
Route::get('/destiny/show/{id}/filter', function () { return view('main.index');});