<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
 use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
           $title = $this->faker->sentence();
           $slug = Str::slug($title);
        return [
            'post_title'=>$title,
           'slug'=>$slug,
            'excerpt'=>$this->faker->realText($maxNbChars=80),
            'min_to_read'=>$this->faker->numberBetween(1,10),
            'imagepath'=>$this->faker->imageUrl(640,480),
            'imagespath'=>$this->faker->imageUrl(640,480),
            'is_published'=>1,
            'user_id'=>1,

            'body'=>$this->faker->text(),
            
        ];
    }
}
