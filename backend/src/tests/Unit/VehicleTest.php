<?php

namespace Tests\Unit;

use App\Models\Vehicle;
use App\Models\VehicleMeter;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class VehicleTest extends TestCase
{
    use DatabaseTransactions;


    private Vehicle $vehicle;

    public function setUp(): void
    {
        parent::setUp();

        $this->vehicle = new Vehicle();
    }

    /** @test 
     * 
     * Verifica se os dados simulados estão corretos
     */
    public function it_simulates_vehicle_parcels_correctly()
    {
        Vehicle::factory()->create([
            'id' => 1,
            'photo' => 'https://www.comprecar.com.br/storage/news/gallery/big/5z6d_QeyN31l0_u.jpg',
            'city' => 'Juazeiro do Norte',
            'brand' => 'Fiat',
            'model' => 'Fiat Argo ',
            'description' => 'Fiat Argo 1.0 Company vermelho',
            'year' => 2018,
            'gearbox' => 1,
            'phone' => '(88) 9 9921-2331',
            'price' => 55000
        ]);

        $response = $this->postJson('/api/vehicles/simulate', [
            'vehicleId' => 1,
            'entryValue' => 2000
        ]);

        $response->assertStatus(200);

        $response->assertJson([
            "six" => 8833.33,
            "twelve" => 4416.67,
            "fortyEight" => 1104.17,
        ]);
    }

    /** @test 
     * 
     * Verifica se o valor da entrada é correto
     */
    public function it_handles_invalid_entry_value()
    {
        Vehicle::factory()->create([
            'id' => 1,
            'photo' => 'https://www.comprecar.com.br/storage/news/gallery/big/5z6d_QeyN31l0_u.jpg',
            'city' => 'Juazeiro do Norte',
            'brand' => 'Fiat',
            'model' => 'Fiat Argo ',
            'description' => 'Fiat Argo 1.0 Company vermelho',
            'year' => 2018,
            'gearbox' => 1,
            'phone' => '(88) 9 9921-2331',
            'price' => 55000
        ]);

        $response = $this->postJson('/api/vehicles/simulate', [
            'vehicleId' => 1,
            'entryValue' => 120000
        ]);

        $response->assertStatus(500);

        $response->assertJson([
            'Entrada maior que o valor do veículo'
        ]);

    }
}
