#!/bin/bash

# Create placeholder images for testing the kitchen visualizer
# This copies the base images as placeholders so you can test the functionality

echo "Creating placeholder images for testing..."

# Space 1 placeholders
cp "assets/kitchen-showcase/1.jpg" "assets/space-combinations/space1/space1_african-rainbow_alaska-gray_beige.jpg"
cp "assets/kitchen-showcase/1.jpg" "assets/space-combinations/space1/space1_african-rainbow_alaska-gray_white.jpg"
cp "assets/kitchen-showcase/1.jpg" "assets/space-combinations/space1/space1_african-rainbow_alaska-white_beige.jpg"
cp "assets/kitchen-showcase/1.jpg" "assets/space-combinations/space1/space1_african-rainbow_alaska-white_white.jpg"
cp "assets/kitchen-showcase/1.jpg" "assets/space-combinations/space1/space1_agatha-black_alaska-gray_beige.jpg"
cp "assets/kitchen-showcase/1.jpg" "assets/space-combinations/space1/space1_agatha-black_alaska-gray_white.jpg"
cp "assets/kitchen-showcase/1.jpg" "assets/space-combinations/space1/space1_agatha-black_alaska-white_beige.jpg"
cp "assets/kitchen-showcase/1.jpg" "assets/space-combinations/space1/space1_agatha-black_alaska-white_white.jpg"

# Space 2 placeholders
cp "assets/kitchen-showcase/2.jpg" "assets/space-combinations/space2/space2_african-rainbow_alaska-gray_beige.jpg"
cp "assets/kitchen-showcase/2.jpg" "assets/space-combinations/space2/space2_african-rainbow_alaska-gray_white.jpg"
cp "assets/kitchen-showcase/2.jpg" "assets/space-combinations/space2/space2_african-rainbow_alaska-white_beige.jpg"
cp "assets/kitchen-showcase/2.jpg" "assets/space-combinations/space2/space2_african-rainbow_alaska-white_white.jpg"
cp "assets/kitchen-showcase/2.jpg" "assets/space-combinations/space2/space2_agatha-black_alaska-gray_beige.jpg"
cp "assets/kitchen-showcase/2.jpg" "assets/space-combinations/space2/space2_agatha-black_alaska-gray_white.jpg"
cp "assets/kitchen-showcase/2.jpg" "assets/space-combinations/space2/space2_agatha-black_alaska-white_beige.jpg"
cp "assets/kitchen-showcase/2.jpg" "assets/space-combinations/space2/space2_agatha-black_alaska-white_white.jpg"

# Space 3 placeholders
cp "assets/kitchen-showcase/3.jpg" "assets/space-combinations/space3/space3_african-rainbow_alaska-gray_beige.jpg"
cp "assets/kitchen-showcase/3.jpg" "assets/space-combinations/space3/space3_african-rainbow_alaska-gray_white.jpg"
cp "assets/kitchen-showcase/3.jpg" "assets/space-combinations/space3/space3_african-rainbow_alaska-white_beige.jpg"
cp "assets/kitchen-showcase/3.jpg" "assets/space-combinations/space3/space3_african-rainbow_alaska-white_white.jpg"
cp "assets/kitchen-showcase/3.jpg" "assets/space-combinations/space3/space3_agatha-black_alaska-gray_beige.jpg"
cp "assets/kitchen-showcase/3.jpg" "assets/space-combinations/space3/space3_agatha-black_alaska-gray_white.jpg"
cp "assets/kitchen-showcase/3.jpg" "assets/space-combinations/space3/space3_agatha-black_alaska-white_beige.jpg"
cp "assets/kitchen-showcase/3.jpg" "assets/space-combinations/space3/space3_agatha-black_alaska-white_white.jpg"

echo "✅ Created 24 placeholder images"
echo "📁 Space 1: assets/space-combinations/space1/ (8 images)"
echo "📁 Space 2: assets/space-combinations/space2/ (8 images)"
echo "📁 Space 3: assets/space-combinations/space3/ (8 images)"
echo ""
echo "Next step: Update script.js to use these combination images instead of base images"