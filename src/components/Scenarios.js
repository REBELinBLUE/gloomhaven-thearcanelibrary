import React from 'react';
import _ from 'underscore';
import {
  Grid, Row, Col, Button,
} from 'react-bootstrap';
import GameComponent from './GameComponent';
import ExpansionConstants from '../constants/ExpansionConstants';
import { SCENARIOS, RANGES } from '../constants/Scenarios';
import GloomhavenIcon from './utils/GloomhavenIcon';

class ScenariosComponent extends GameComponent {
  getStateFromGame(game) {
    return {
      partyAchievements: game.partyAchievements || {},
      globalAchievements: game.globalAchievements || {},
      scenariosComplete: game.scenariosComplete || [],
      scenariosUnlocked: game.scenariosUnlocked || [],
    };
  }

  isAllowedToDoScenario(number) {
    const scenario = SCENARIOS[number];
    const { globalAchievements } = this.state;
    const { partyAchievements } = this.state;

    const conditionsSatisfied = [];
    for (const reqGlobAch of (scenario.globalAchievementsRequired || [])) {
      conditionsSatisfied.push(globalAchievements[reqGlobAch] === 'true');
    }
    for (const reqGlobAchInc of (scenario.globalAchievementsRequiredIncomplete || [])) {
      conditionsSatisfied.push(!globalAchievements[reqGlobAchInc]);
    }
    for (const reqPartyAch of (scenario.partyAchievementsRequired || [])) {
      conditionsSatisfied.push(partyAchievements[reqPartyAch] === 'true');
    }
    for (const reqPartyAchInc of (scenario.partyAchievementsRequiredIncomplete || [])) {
      conditionsSatisfied.push(partyAchievements[reqPartyAchInc] !== 'true');
    }

    const f = scenario.onlyOneAchievementRequired ? _.some : _.every;
    return f(conditionsSatisfied);
  }

  makeScenarioColumn(number) {
    const scenario = SCENARIOS[number];
    // mainly just for testing - make sure we're not trying to render a scenario that doesn't exist
    if (!scenario) {
      return '';
    }

    let buttonStyle = '';

    if (this.state.scenariosComplete.indexOf(number) >= 0) {
      // scenario is complete - no need to check requirements
      buttonStyle = 'btn-completed';
    } else if (this.state.scenariosUnlocked.indexOf(number) >= 0) {
      // scenario is unlocked but we haven't done it yet - check the requirements
      if (this.isAllowedToDoScenario(number)) {
        // we are allowed to do this scenario
        buttonStyle = 'btn-unlocked';
      } else {
        // there is a party or global achievement blocking us from doing this scenario (this could change later)
        buttonStyle = 'btn-blocked';
      }
    }

    // just save some space on mobiles by shrinking the buttons when they are showing only a number
    let xs = 6;
    const iconHeight = 20;

    let buttonText = scenario.symbol || number;
    const icon = scenario.icon ? <GloomhavenIcon icon={scenario.icon} height={iconHeight} /> : '';

    // always show number, but only show scenario title if it is unlocked
    if (this.state.scenariosUnlocked.indexOf(number) >= 0) {
      buttonText += `: ${scenario.title}`;
      xs = 12;
    }

    return (
      <Col key={number} xs={xs} md={4} lg={3}>
        <Button onClick={() => this.toggleScenarioClick(number)} className={buttonStyle} block>
          {icon}
          <span>{buttonText}</span>
        </Button>
      </Col>
    );
  }

  addScenarioToList(listName, number) {
    this.setStateAndUpdateGame((state) => ({
      [listName]: _.union(state[listName], [number]),
    }));
  }

  completeScenario(number) {
    this.addScenarioToList('scenariosComplete', number);
  }

  unlockScenario(number) {
    this.addScenarioToList('scenariosUnlocked', number);
  }

  lockScenario(number) {
    // to lock a scenario, it needs to be removed from both the unlocked and completed lists
    this.setStateAndUpdateGame((state) => ({
      scenariosComplete: _.without(state.scenariosComplete, number),
      scenariosUnlocked: _.without(state.scenariosUnlocked, number),
    }));
  }

  toggleScenarioClick(number) {
    if (this.state.scenariosComplete.indexOf(number) >= 0) {
      // scenario is complete: mark it is locked again (this step allows users to undo their mistakes)
      this.lockScenario(number);
    } else if (this.state.scenariosUnlocked.indexOf(number) >= 0) {
      // scenario is unlocked but we haven't done it yet

      if (this.isAllowedToDoScenario(number)) {
        // we are allowed to do this scenario: mark it as complete
        this.completeScenario(number);
      } else {
        // something is blocking us from completing this scenario: mark it as locked again (this step allows users to undo their mistakes)
        this.lockScenario(number);
      }
    } else {
      // scenario is locked: mark it as unlocked
      this.unlockScenario(number);
    }
  }

  render() {
    const campaignMissionColumns = [];
    const personalQuestColumns = [];
    const randomScenarioColumns = [];
    const sealedScenarioColumns = [];
    const cityEventColumns = [];
    const roadEventColumns = [];

    // campaign missions
    for (let i = 1; i <= 51; i++) {
      campaignMissionColumns.push(this.makeScenarioColumn(i));
    }

    // personal quests
    for (let i = 52; i <= 62; i++) {
      personalQuestColumns.push(this.makeScenarioColumn(i));
    }

    // random side scenarios
    for (let i = 63; i <= 71; i++) {
      randomScenarioColumns.push(this.makeScenarioColumn(i));
    }

    // sealed
    sealedScenarioColumns.push(this.makeScenarioColumn(72));
    sealedScenarioColumns.push(this.makeScenarioColumn(73));
    sealedScenarioColumns.push(this.makeScenarioColumn(76));
    sealedScenarioColumns.push(this.makeScenarioColumn(77));
    sealedScenarioColumns.push(this.makeScenarioColumn(84));

    // road events
    roadEventColumns.push(this.makeScenarioColumn(80));
    roadEventColumns.push(this.makeScenarioColumn(82));
    roadEventColumns.push(this.makeScenarioColumn(85));
    roadEventColumns.push(this.makeScenarioColumn(90));

    // city events
    cityEventColumns.push(this.makeScenarioColumn(74));
    cityEventColumns.push(this.makeScenarioColumn(75));
    cityEventColumns.push(this.makeScenarioColumn(78));
    cityEventColumns.push(this.makeScenarioColumn(79));
    cityEventColumns.push(this.makeScenarioColumn(81));
    cityEventColumns.push(this.makeScenarioColumn(83));

    for (let i = 86; i <= 89; i++) {
      cityEventColumns.push(this.makeScenarioColumn(i));
    }

    for (let i = 91; i <= 94; i++) {
      cityEventColumns.push(this.makeScenarioColumn(i));
    }

    // Forgotten Circles
    const forgottenCirclesColumns = _.map(RANGES[1], (i) => this.makeScenarioColumn(i));

    // solo scenarios
    const soloColumns = _.map(RANGES[2], (i) => this.makeScenarioColumn(i));

    // into the unknown scenarios
    const intoUnknownColumns = _.map(RANGES[3], (i) => this.makeScenarioColumn(i));

    // capital intrigue scenarios
    const capitalColumns = _.map(RANGES[4], (i) => this.makeScenarioColumn(i));

    // the infinite beyond scenarios
    const infiniteColumns = _.map(RANGES[5], (i) => this.makeScenarioColumn(i));

    // the blacksmith and the bear scenarios
    const blacksmithColumns = _.map(RANGES[6], (i) => this.makeScenarioColumn(i));

    return (
      <div className="container scenarios-container">
        <Grid>
          <Row>
            <Col xs={12}>
              <p>
                You can track your campaign's progress of <strong>unlocking and completing</strong> scenarios with the buttons below.
              </p>
              <p>
                Each button has a number that corresponds to a scenario in the scenario book. Selecting a scenario button will reveal its name and mark it as <strong>unlocked</strong>. You can do this when you place a sticker on the map.
              </p>
              <p>
                Selecting a scenario that has been unlocked will change its status to <strong>completed</strong>.
              </p>
              <p>
                Both the <strong>party achievements</strong> and <strong>global achievements</strong> that you have marked as gained and lost in the app will determine whether you are eligible to do a scenario in campaign mode. The status of a scenario will <strong>update automatically</strong> as you gain and lose party and global achievements.
              </p>
            </Col>
          </Row>
          <Row className="scenario-key">
            <Col xs={12} md={3} className="text-center">
              <Button className="btn-completed">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Scenario Completed
            </Col>
            <Col xs={12} md={3} className="text-center">
              <Button className="btn-unlocked">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Scenario Unlocked
            </Col>
            <Col xs={12} md={3} className="text-center">
              <Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Scenario Locked
            </Col>
            <Col xs={12} md={3} className="text-center">
              <Button className="btn-blocked">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button> Ineligible for Scenario
            </Col>
          </Row>
          <Row>
            <Col lg={12}><h2>Main Story</h2></Col>
            {campaignMissionColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h3>Personal Quests</h3></Col>
            {personalQuestColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h3>Random Scenarios</h3></Col>
            {randomScenarioColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h3>Sealed Scenarios</h3></Col>
            {sealedScenarioColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h3>Road Events</h3></Col>
            {roadEventColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h3>City Events</h3></Col>
            {cityEventColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h2>{ExpansionConstants.FORGOTTEN_CIRCLES}</h2></Col>
            {forgottenCirclesColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}>
              <h2>{ExpansionConstants.SOLO}</h2>
              <p>Corresponding scenario is unlocked when the class reaches level 5.</p>
            </Col>
            {soloColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h2>{ExpansionConstants.INTO_THE_UNKNOWN}</h2></Col>
            {intoUnknownColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h2>{ExpansionConstants.CAPITAL_INTRIGUE}</h2></Col>
            {capitalColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h2>{ExpansionConstants.INFINITE_BEYOND}</h2></Col>
            {infiniteColumns}
          </Row>
          <hr />
          <Row>
            <Col lg={12}><h2>{ExpansionConstants.BLACKSMITH_AND_BEAR}</h2></Col>
            {blacksmithColumns}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ScenariosComponent;
