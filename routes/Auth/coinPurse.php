<?php

use Illuminate\Support\Facades\Route;

Route::get('/coinPurse', function () { return view('main.index');});
Route::get('/coinPurse/new-method', function () { return view('main.index');});