<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () { return view('main.index');});
Route::get('/tips', function () {  return view('main.index');});
Route::get('/hosts/register', function () {  return view('main.index');});
Route::get('/blog', function () {  return view('main.index');});
Route::get('/start', function () {  return view('main.index');});
Route::get('/login', function () {  return view('main.index');});  
Route::get('/register', function () {  return view('main.index');}); 

