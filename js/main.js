var red1, green1, blue1, alpha1;
var red2, green2, blue2, alpha2;
var mode, blendColor;

function setup() {
  let canvas = createCanvas(200, 150);
  canvas.parent('canvas');
  noStroke();
  select('#blend_button').mousePressed(Blend);
  red1 = select('#red1_number');
  green1 = select('#green1_number');
  blue1 = select('#blue1_number');
  alpha1 = select('#alpha1_number');
  red2 = select('#red2_number');
  green2 = select('#green2_number');
  blue2 = select('#blue2_number');
  alpha2 = select('#alpha2_number');
  mode = select('#mode_select');
  blendColor = select('#blend_color');
  setRGBOption(red1, 0);
  setRGBOption(green1, 255);
  setRGBOption(blue1, 255);
  setAlphaOption(alpha1);
  setRGBOption(red2, 255);
  setRGBOption(green2, 0);
  setRGBOption(blue2, 255);
  setAlphaOption(alpha2);
  setBlendModeOption(mode);
}

function setRGBOption(select, initial) {
  for (let i = 0; i < 256; i++) {
    select.option(i);
  }
  select.selected(initial);
}

function setAlphaOption(select) {
  for (let i = 0; i <= 100; i = i + 5) {
    select.option(i / 100);
  }
  select.selected(0.5);
}

function setBlendModeOption(select) {
  select.option('BLEND', BLEND);
  select.option('ADD', ADD);
  select.option('DARKEST', DARKEST);
  select.option('LIGHTEST', LIGHTEST);
  select.option('DIFFERENCE', DIFFERENCE);
  select.option('EXCLUSION', EXCLUSION);
  select.option('MULTIPLY', MULTIPLY);
  select.option('SCREEN', SCREEN);
  select.option('REPLACE', REPLACE);
  select.option('REMOVE', REMOVE);
  select.option('OVERLAY', OVERLAY);
  select.option('HARD_LIGHT', HARD_LIGHT);
  select.option('SOFT_LIGHT', SOFT_LIGHT);
  select.option('DODGE', DODGE);
  select.option('BURN', BURN);
  select.selected(BLEND);
}

function Blend() {
  clear();
  // Blend two rgba colors
  colorMode(RGB, 255, 255, 255, 1);
  blendMode(mode.value());
  fill(red1.value(), green1.value(), blue1.value(), float(alpha1.value()));
  ellipse(75, 75, 100, 100);
  fill(red2.value(), green2.value(), blue2.value(), float(alpha2.value()));
  ellipse(125, 75, 100, 100);
  colorMode(RGB, 255, 255, 255, 255);
  // Show the result
  colorMode(RGB, 255, 255, 255, 255);
  let color = get(100, 75);
  let a = int(alpha(color) / 255 * 100) / 100;
  blendColor.value(red(color) + "," + green(color) + "," + blue(color) + "," + a);
}
