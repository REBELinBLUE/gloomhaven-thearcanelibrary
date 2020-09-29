import _ from 'underscore';
import { BASE_SCENARIOS } from './campaigns/base';
import { EXTRA_SCENARIOS } from './campaigns/extras';
import { SOLO_SCENARIOS } from './campaigns/solo';
import { INTO_THE_UNKNOWN_SCENARIOS } from './campaigns/kickstarter1';
import { CAPITAL_INTRIGUE_SCENARIOS } from './campaigns/kickstarter2';
import { INFINITE_BEYOND_SCENARIOS } from './campaigns/kickstarter3';
import { BLACKSMITH_AND_BEAR_SCENARIOS } from './campaigns/kickstarter4';

export const UNKNOWN_PREFIX = 801;
export const SOLO_PREFIX = 901;
export const CAPITAL_PREFIX = 1001;
export const INFINITE_PREFIX = 1101;
export const BLACKSMITH_PREFIX = 1201;

export const FC_START = 96;
export const FC_END = 115;
export const FC_CHALLENGE = 701;

export const SCENARIOS = {
  ...BASE_SCENARIOS,
  [FC_CHALLENGE]: EXTRA_SCENARIOS[0],
};

for (const [i, scenario] of SOLO_SCENARIOS.entries()) {
  SCENARIOS[SOLO_PREFIX + i] = scenario;
}

for (const [i, scenario] of INTO_THE_UNKNOWN_SCENARIOS.entries()) {
  SCENARIOS[UNKNOWN_PREFIX + i] = scenario;
}

for (const [i, scenario] of CAPITAL_INTRIGUE_SCENARIOS.entries()) {
  SCENARIOS[CAPITAL_PREFIX + i] = scenario;
}

for (const [i, scenario] of INFINITE_BEYOND_SCENARIOS.entries()) {
  SCENARIOS[INFINITE_PREFIX + i] = scenario;
}

for (const [i, scenario] of BLACKSMITH_AND_BEAR_SCENARIOS.entries()) {
  SCENARIOS[BLACKSMITH_PREFIX + i] = scenario;
}

export const RANGES = [
  _.range(1, FC_START),
  _.range(FC_START, FC_END + 1).concat([FC_CHALLENGE]),
  _.range(SOLO_PREFIX, SOLO_PREFIX + SOLO_SCENARIOS.length),
  _.range(UNKNOWN_PREFIX, UNKNOWN_PREFIX + INTO_THE_UNKNOWN_SCENARIOS.length),
  _.range(CAPITAL_PREFIX, CAPITAL_PREFIX + CAPITAL_INTRIGUE_SCENARIOS.length),
  _.range(INFINITE_PREFIX, INFINITE_PREFIX + INFINITE_BEYOND_SCENARIOS.length),
  _.range(BLACKSMITH_PREFIX, BLACKSMITH_PREFIX + BLACKSMITH_AND_BEAR_SCENARIOS.length),
];
