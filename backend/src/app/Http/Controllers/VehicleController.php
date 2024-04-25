<?php

namespace App\Http\Controllers;

use Exception;
use Throwable;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function all()
    {
        return Vehicle::all();
    }

    public function find($vehicleId)
    {
        return Vehicle::find($vehicleId);
    }

    public function simulate(Request $request)
    {
        try {
            $vehicleId = $request->input("vehicleId");
            $entryValue = $request->input("entryValue");
            $vehicle = Vehicle::find($vehicleId);
            if ($entryValue > $vehicle->price) {
                throw new Exception("Entrada maior que o valor do veículo", 1);
            }
            $six = self::simulateParcel($entryValue, $vehicle->price, 6);
            $six = self::simulateParcel($entryValue, $vehicle->price, 12);
            $six = self::simulateParcel($entryValue, $vehicle->price, 48);
            // $simulated = [
            //     "six" => 
            // ]

            return response()->json($vehicle, 200);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function simulateParcel($entry, $price, $parcel)
    {
        return ($price - $entry) / $parcel;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Vehicle $vehicle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vehicle $vehicle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vehicle $vehicle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicle $vehicle)
    {
        //
    }
}
