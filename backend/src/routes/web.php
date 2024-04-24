<?php

use App\Http\Controllers\VehicleController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'vehicles'], function () {
    Route::get("", [VehicleController::class, 'all']);
    Route::get("{vehicleId}", [VehicleController::class, 'find']);
    // Route::get("{vehicleId}", 'VehicleController@find');
});