<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('role_user')->delete();
        DB::table('users')->delete();
        $user = User::create(['login' => 'admin', 'password' => Hash::make('admin'), 'disabled' => false, 'name' => 'Admin user']);

        $roles = [
            'write' => 'Allow user save to database',
            'sms' => 'Allow user setup phone numbers and edit sms send settings',
            'edit_users' => 'Allow user setup other users'
        ];
        DB::table('roles')->delete();

        foreach ($roles as $roleName => $roleDescription) {
            $role = Role::create(['name' => $roleName, 'description' => $roleDescription]);
            $user->roles()->attach($role);
        }
    }
}
