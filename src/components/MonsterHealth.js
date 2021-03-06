import React from 'react';
import _ from 'underscore';
import {
  Grid, Row, Col, Button, ProgressBar, Modal,
} from 'react-bootstrap';
import GameComponent from './GameComponent';
import GloomhavenIcon from './utils/GloomhavenIcon';
import { STATS } from '../constants/MonsterStats';
import { SCENARIOS, RANGES } from '../constants/Scenarios';

const iconWidth = '30px';
const iconWidthSmall = '18px';

class MonsterHealthComponent extends GameComponent {
  constructor() {
    super();

    // monsterHealth is already present in the state.
    Object.assign(this.state, {
      displayMonsterType: 'ACTIVE',
      statusTokenPopup: '',
      statusTokensEnabled: [],
      healAmount: 2,
      endMonsterRoundToggled: false,
      healToggled: false,
      clearAllStatusEffectsToggled: false,
    });

    this.scenarioGo = this.scenarioGo.bind(this);
  }

  getStateFromGame(game) {
    return {
      monsterHealth: game.monsterHealth || {},
    };
  }

  getGameUpdateFromState(change) {
    return _.pick(change, 'monsterHealth');
  }

  getAllActiveMonsters() {
    let activeMonsterList = [];

    // cycle through all the monsters of all different types, looking for the ones that are active
    for (const monsterNameProperty in this.state.monsterHealth.monsters) {
      if (this.state.monsterHealth.monsters.hasOwnProperty(monsterNameProperty)) {
        const monsterRecords = this.state.monsterHealth.monsters[monsterNameProperty];

        const activeMonsterRecords = monsterRecords.filter((currentValue, index) => currentValue.alive);

        activeMonsterList = activeMonsterList.concat(activeMonsterRecords);
      }
    }

    return activeMonsterList;
  }

  getMonsterType(monsterName) {
    return STATS[monsterName];
  }

  getMonsterLevelStats(monster) {
    return this.getMonsterType(monster.name).level[monster.level];
  }

  makeMonsterToggleButton(monsterToDisplay) {
    let buttonClass = 'btn-monster-dead';
    if (monsterToDisplay.alive) {
      if (monsterToDisplay.elite) {
        buttonClass = 'btn-monster-elite';
      } else {
        buttonClass = 'btn-monster-normal';
      }

      if (monsterToDisplay.summon) {
        buttonClass += ' btn-monster-summon';
      }
    }

    buttonClass += ' btn-monster';

    const monsterStatusTokens = [];

    if (!monsterToDisplay.statusTokens) {
      monsterToDisplay.statusTokens = [];
    }

    for (let i = 0; i < monsterToDisplay.statusTokens.length; i++) {
      const statusToken = monsterToDisplay.statusTokens[i];

      monsterStatusTokens.push(
        <GloomhavenIcon key={i} icon={statusToken} width={iconWidthSmall} />,
      );
    }

    console.log(monsterToDisplay)

    let buttonText = `${monsterToDisplay.label || monsterToDisplay.name} ${monsterToDisplay.number}`;
    if (monsterToDisplay.summon && monsterToDisplay.alive) {
      buttonText += '*';
    }

    return (
      <Button block onClick={() => this.toggleMonster(monsterToDisplay)} className={buttonClass}>
        {buttonText} {monsterStatusTokens}
      </Button>
    );
  }

  makeMonsterKillButton(monsterToDisplay) {
    return (
      <Button disabled={!monsterToDisplay.alive} block onClick={() => this.showConfirmKillMonster(monsterToDisplay)} className={`btn-blocked${!monsterToDisplay.alive ? ' btn-disabled' : ''}`}>Kill Monster</Button>
    );
  }

  calculateBossHealth(healthString, scenarioLevel, numPlaying) {
    let health = 0;

    const healthParts = healthString.split('x');

    for (let i = 0; i < healthParts.length; i++) {
      let healthPart = healthParts[i];

      // translate this part of the health string to a number
      if (healthPart === 'C') {
        // number of characters
        healthPart = numPlaying;
      } else if (healthPart === 'L') {
        // scenario level
        healthPart = scenarioLevel;
      }

      if (health <= 0) {
        // this is the first number we're adding to the calculation
        health = healthPart;
      } else {
        // multiple this number by the previous health number
        health *= healthPart;
      }
    }

    return health;
  }

  makeMonsterHealthProgressBar(monsterToDisplay) {
    const { monsterHealth } = this.state;
    const monsterType = this.getMonsterType(monsterToDisplay.name);
    const monsterLevelStats = this.getMonsterLevelStats(monsterToDisplay);

    let maxHealth = 0;

    if (monsterType.isBoss) {
      maxHealth = this.calculateBossHealth(monsterLevelStats.health, monsterToDisplay.level, monsterHealth.defaultNumPlaying);
    } else if (monsterToDisplay.elite) {
      maxHealth = monsterLevelStats.elite.health;
    } else {
      maxHealth = monsterLevelStats.normal.health;
    }

    let healthNow = maxHealth - monsterToDisplay.damage;
    if (healthNow < 0) {
      healthNow = 0;
    }

    return (
      <ProgressBar label={healthNow} max={maxHealth} min={0} now={healthNow} className="progress-grey" />
    );
  }

  makeMonsterDamageHealButton(monsterToDisplay, isHeal) {
    let text = '-';
    let damageAmount = 1;
    let buttonClass = 'btn-unlocked';

    if (isHeal) {
      text = '+';
      damageAmount = -1;
      buttonClass = 'btn-import';
    }

    if (!monsterToDisplay.alive) {
      buttonClass += ' btn-disabled';
    }

    return (
      <Button disabled={!monsterToDisplay.alive} block onClick={() => this.changeMonsterDamage(monsterToDisplay, damageAmount)} className={buttonClass}>{text}</Button>
    );
  }

  makeMonsterScenarioLevelButton(monsterToDisplay) {
    return (
      <Button disabled={!monsterToDisplay.alive} onClick={() => this.changeMonsterScenarioLevel(monsterToDisplay)} className={(!monsterToDisplay.alive ? ' btn-disabled' : '')} block>{monsterToDisplay.level}</Button>
    );
  }

  makeDisplayedMonsterSection(monsterToDisplay) {
    const key = monsterToDisplay.name + monsterToDisplay.number;

    const monsterToggleButton = this.makeMonsterToggleButton(monsterToDisplay);
    const monsterKillButton = this.makeMonsterKillButton(monsterToDisplay);
    const monsterHealthProgressBar = this.makeMonsterHealthProgressBar(monsterToDisplay);
    const monsterTakeDamageButton = this.makeMonsterDamageHealButton(monsterToDisplay, false);
    const monsterHealButton = this.makeMonsterDamageHealButton(monsterToDisplay, true);
    const monsterLevelButton = this.makeMonsterScenarioLevelButton(monsterToDisplay);

    return (
      <Col xs={12} md={6} key={key} className="monster-health-col">
        <Row>
          <Col xs={8} className="wide-right">
            {monsterToggleButton}
          </Col>
          <Col xs={4} className="wide-left">
            { this.isDisplayActiveOnly() ? monsterKillButton : monsterLevelButton }
          </Col>
        </Row>
        <Row>
          <Col xs={8} className="wide-right">
            {monsterHealthProgressBar}
          </Col>
          <Col xs={2} className="wide-both">
            {monsterTakeDamageButton}
          </Col>
          <Col xs={2} className="wide-left">
            {monsterHealButton}
          </Col>
        </Row>
      </Col>
    );
  }

  isDisplayActiveOnly() {
    return this.state.displayMonsterType === 'ACTIVE';
  }

  makeDisplayedMonsterSections() {
    let displayedMonstersData = [];
    const displayedMonstersHTML = [];

    // find which monsters to display
    if (this.isDisplayActiveOnly()) {
      displayedMonstersData = this.getAllActiveMonsters();
    } else {
      displayedMonstersData = this.state.monsterHealth.monsters[this.state.displayMonsterType];
    }

    // ensure that monsters are sorted alphabetically by name and then by their number
    if (displayedMonstersData) {
      displayedMonstersData.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        if (aName < bName) { return -1; }
        if (aName > bName) { return 1; }
        if (a.number < b.number) { return -1; }
        if (a.number > b.number) { return 1; }
        return 0;
      });

      for (let i = 0; i < displayedMonstersData.length; i++) {
        const monsterToDisplay = displayedMonstersData[i];

        displayedMonstersHTML.push(this.makeDisplayedMonsterSection(monsterToDisplay));
      }
    }

    return displayedMonstersHTML;
  }

  getScenarioMonsters(scenario) {
    return SCENARIOS[scenario].monsters;
  }

  scenarioGo() {
    this.setStateAndUpdateGame((state) => {
      const monsterHealthCopy = { ...state.monsterHealth };

      // first clear all existing monsters
      monsterHealthCopy.monsters = {};

      // find all the monster types that are in this scenario by default
      const decks = this.getScenarioMonsters(monsterHealthCopy.scenario);
      const monsterNames = _.pluck(decks, 'name');

      monsterNames.sort((a, b) => {
        const aName = a.toLowerCase();
        const bName = b.toLowerCase();

        if (aName < bName) { return -1; }
        if (aName > bName) { return 1; }
        return 0;
      });

      for (let i = 0; i < monsterNames.length; i++) {
        const monsterName = monsterNames[i];

        // find the monsters stats in the data structure
        const monsterType = this.getMonsterType(monsterName);

        const monsters = [];

        for (let j = 0; j < monsterType.standeeCount; j++) {
          // add a monster record to the data structure
          monsters.push({
            name: monsterName,
            number: j + 1,
            elite: false,
            level: monsterHealthCopy.defaultScenarioLevel,
            alive: false,
            damage: 0,
            statusTokens: [],
          });
        }

        monsterHealthCopy.monsters[monsterName] = monsters;
      }

      return {
        monsterHealth: monsterHealthCopy,
        displayMonsterType: 'ACTIVE',
      };
    });
  }

  createMonsterHeaderButton(monsterName) {
    return (
      <Col xs={12} md={3} key={monsterName}>
        <Button onClick={() => this.showMonsters(monsterName)} className="btn-blocked" block>{monsterName}</Button>
      </Col>
    );
  }

  createMonsterHeaderActiveButton() {
    return (
      <Col xs={12} md={3} key="active">
        <Button onClick={() => this.showActiveMonsters()} className="btn-completed" block>All Active</Button>
      </Col>
    );
  }

  showActiveMonsters() {
    this.setState({
      displayMonsterType: 'ACTIVE',
    });
  }

  showMonsters(monsterName) {
    this.setState({
      displayMonsterType: monsterName,
    });
  }

  createScenarioLevelButton(value, activeValue) {
    return (
      <Col xs={1} md={1} key={value}>
        <Button onClick={() => this.levelButtonClick(value)} className={activeValue === value ? 'btn-unlocked' : ''} block>{value}</Button>
      </Col>
    );
  }

  createNumCharactersButton(value, activeValue) {
    return (
      <Col xs={3} key={value}>
        <Button onClick={() => this.numCharactersButtonClick(value)} className={activeValue === value ? 'btn-unlocked' : ''} block>{value}</Button>
      </Col>
    );
  }

  setMonsterHealthState(mutator) {
    this.setStateAndUpdateGame((state) => {
      const monsterHealthCopy = { ...state.monsterHealth };
      mutator(monsterHealthCopy);
      return {
        monsterHealth: monsterHealthCopy,
      };
    });
  }

  levelButtonClick(value) {
    this.setMonsterHealthState((monsterHealth) => {
      monsterHealth.defaultScenarioLevel = value;
    });
  }

  numCharactersButtonClick(value) {
    this.setMonsterHealthState((monsterHealth) => {
      monsterHealth.defaultNumPlaying = value;
    });
  }

  killMonster(monster) {
    this.setMonsterHealthState((monsterHealth) => {
      monster.alive = false;
      monster.damage = 0;
      monster.statusTokens = [];
    });
    this.closeConfirmKillMonster();
  }

  changeMonsterScenarioLevel(monster) {
    this.setMonsterHealthState((monsterHealth) => {
      monster.level = (monster.level + 1) % 8;
    });
  }

  healMonster(monster) {
    this.setMonsterHealthState((monsterHealth) => {
      const poisonIndex = monster.statusTokens.indexOf('statusEffectPoison');
      const woundIndex = monster.statusTokens.indexOf('statusEffectWound');
      let healDamage = true;
      if (poisonIndex > -1) {
        // poison blocks heal
        healDamage = false;
        // remove poison
        monster.statusTokens.splice(poisonIndex, 1);
      }
      if (woundIndex > -1) {
        // remove wound
        monster.statusTokens.splice(woundIndex, 1);
      }
      if (healDamage) {
        this.changeMonsterDamageInternal(monster, -this.state.healAmount);
      }
    });
  }

  changeMonsterDamage(monster, damageAmount) {
    this.setMonsterHealthState((monsterHealth) => {
      this.changeMonsterDamageInternal(monster, damageAmount);
    });
  }

  changeMonsterDamageInternal(monster, damageAmount) {
    const monsterLevelStats = this.getMonsterLevelStats(monster);
    const monsterType = this.getMonsterType(monster.name);
    let damage = monster.damage + damageAmount;

    let health = 0;
    if (monsterType.isBoss) {
      health = monsterLevelStats.health;
    } else if (monster.elite) {
      health = monsterLevelStats.elite.health;
    } else {
      health = monsterLevelStats.normal.health;
    }

    if (damage >= health) {
      damage = health;
    } else if (damage < 0) {
      damage = 0;
    }

    monster.damage = damage;
  }

  clearStatusEffectToggles() {
    this.setState({
      statusTokensEnabled: [],
      healToggled: false,
      endMonsterRoundToggled: false,
      clearAllStatusEffectsToggled: false,
    });
  }

  toggleStatusEffect(statusEffect) {
    const enabled = this.state.statusTokensEnabled;
    const tokenIndex = enabled.indexOf(statusEffect);

    if (tokenIndex > -1) {
      // turn it off
      enabled.splice(tokenIndex, 1);
    } else {
      // turn it on
      enabled.push(statusEffect);
    }

    this.setState({
      statusTokensEnabled: enabled,
      healToggled: false,
      endMonsterRoundToggled: false,
      clearAllStatusEffectsToggled: false,
    });
  }

  clearAllStatusEffectsForMonster(monster) {
    this.setMonsterHealthState((monsterHealth) => {
      monster.statusTokens = [];
    });
  }

  toggleStatusToken(statusToken, monster) {
    this.setMonsterHealthState((monsterHealth) => {
      // for backwards compatibility
      if (!monster.statusTokens) {
        monster.statusTokens = [];
      }

      const index = monster.statusTokens.indexOf(statusToken);
      if (index >= 0) {
        // remove this status token from monster
        monster.statusTokens.splice(index, 1);
      } else {
        // add this status token to monster
        monster.statusTokens.push(statusToken);
      }
    });
  }

  endRoundForMonster(monster) {
    this.setMonsterHealthState((monsterHealth) => {
      const poisoned = monster.statusTokens.indexOf('statusEffectPoison') > -1;
      const wounded = monster.statusTokens.indexOf('statusEffectWound') > -1;

      // remove everything except poison and wound
      monster.statusTokens = [];

      if (poisoned) {
        monster.statusTokens.push('statusEffectPoison');
      }

      if (wounded) {
        monster.statusTokens.push('statusEffectWound');
      }
    });
  }

  toggleMonster(monster) {
    const monsterType = this.getMonsterType(monster.name);

    if (this.isDisplayActiveOnly()) {
      // we're display all active monsters

      if (this.state.statusTokensEnabled.length > 0) {
        // toggle the selected status effects for this particular monster
        for (let i = 0; i < this.state.statusTokensEnabled.length; i++) {
          const effect = this.state.statusTokensEnabled[i];

          this.toggleStatusToken(effect, monster);
        }
      } else if (this.state.healToggled) {
        this.healMonster(monster);
      } else if (this.state.endMonsterRoundToggled) {
        this.endRoundForMonster(monster);
      } else if (this.state.clearAllStatusEffectsToggled) {
        this.clearAllStatusEffectsForMonster(monster);
      } else {
        // show the popup for status effects
        this.setState({
          statusTokenPopup: monster,
        });
      }

      // don't carry on and update game state in this method - it was already done in one of the methods called
    } else {
      // if we're displaying only monsters of a particular type, then this button toggles between normal/elite/summon/dead
      this.setMonsterHealthState((monsterHealth) => {
        if (monsterType.isBoss) {
          // boss monster: dead -> alive (normal) -> dead -> ...

          if (!monster.alive) {
            // dead -> alive (normal)
            monster.alive = true;
          } else {
            // alive (normal) -> dead
            monster.alive = false;
          }
        } else {
          // regular monster: dead -> alive (normal) -> alive (elite) -> alive (normal, summon) -> alive (elite, summon) -> dead -> ...

          if (!monster.alive) {
            // dead -> alive (normal)
            monster.alive = true;
            monster.elite = false;
          } else if (!monster.elite && !monster.summon) {
            // alive (normal) -> alive (elite)
            monster.elite = true;
          } else if (monster.elite && !monster.summon) {
            // alive (elite) -> alive (normal, summon)
            monster.elite = false;
            monster.summon = true;
          } else if (!monster.elite && monster.summon) {
            // alive (normal, summon) -> alive (elite, summon)
            monster.elite = true;
          } else {
            // alive (elite, summon) -> dead
            monster.alive = false;
            monster.elite = false;
            monster.summon = false;
            monster.damage = 0;
          }
        }
      });
    }
  }

  closeStatusTokenPopup() {
    this.setState({
      statusTokenPopup: '',
    });
  }

  makeStatusTokenButtons() {
    const buttons = [];

    if (this.state.statusTokenPopup === '') {
      return buttons;
    }

    const statusTokens = ['statusEffectStun', 'statusEffectDisarm', 'statusEffectImmobilize', 'statusEffectPoison', 'statusEffectWound', 'statusEffectMuddle', 'statusEffectStrengthen', 'statusEffectInvisible'];

    for (let i = 0; i < statusTokens.length; i++) {
      const statusToken = statusTokens[i];

      buttons.push(
        <Col key={i} xs={4} md={3}>
          <Button block onClick={() => this.toggleStatusToken(statusToken, this.state.statusTokenPopup)} className={this.state.statusTokenPopup.statusTokens && this.state.statusTokenPopup.statusTokens.indexOf(statusToken) >= 0 ? 'btn-unlocked' : ''}>
            <GloomhavenIcon icon={statusToken} width={iconWidth} />
          </Button>
        </Col>,
      );
    }

    return buttons;
  }

  makeStatusEffectToggles() {
    const buttons = [];

    const statusTokens = ['statusEffectStun', 'statusEffectDisarm', 'statusEffectImmobilize', 'statusEffectPoison', 'statusEffectWound', 'statusEffectMuddle', 'statusEffectStrengthen', 'statusEffectInvisible'];

    for (let i = 0; i < statusTokens.length; i++) {
      const statusToken = statusTokens[i];

      buttons.push(
        <Col key={i} xs={3} md={1}>
          <Button block onClick={() => this.toggleStatusEffect(statusToken)} className={this.state.statusTokensEnabled && this.state.statusTokensEnabled.indexOf(statusToken) >= 0 ? 'btn-unlocked' : ''}>
            <GloomhavenIcon icon={statusToken} width={iconWidth} />
          </Button>
        </Col>,
      );
    }

    return buttons;
  }

  showScenarioChooser() {
    this.setState({
      showScenarioChooser: true,
    });
  }

  showMonsterChooser() {
    this.setState({
      showMonsterChooser: true,
    });
  }

  closeScenarioChooser() {
    this.setState({
      showScenarioChooser: false,
    });
  }

  closeConfirmKillMonster() {
    this.setState({
      confirmKillMonster: null,
    });
  }

  showConfirmKillMonster(monster) {
    this.setState({
      confirmKillMonster: monster,
    });
  }

  closeMonsterChooser() {
    this.setState({
      showMonsterChooser: false,
    });
  }

  makeScenarioChooserButtons() {
    return _.map(RANGES, (nums, rangeIndex) => {
      const buttons = _.map(nums, (i) => this.makeScenarioChooserButton(SCENARIOS[i].symbol || i, i));
      return (
        <Row className="scenario-chooser-container" key={rangeIndex}>
          {buttons}
        </Row>
      );
    });
  }

  makeScenarioChooserButton(buttonText, scenarioNumber) {
    return (
      <Col xs={2} key={scenarioNumber}>
        <Button block className="btn-unlocked btn-scenario-chooser" onClick={() => this.chooseScenario(scenarioNumber)}>{buttonText}</Button>
      </Col>
    );
  }

  makeMonsterChooserButtons() {
    const buttons = [];

    for (const monsterName in STATS) {
      if (STATS.hasOwnProperty(monsterName)) {
        buttons.push(this.makeMonsterChooserButton(monsterName));
      }
    }

    buttons.sort((a, b) => {
      const aKey = a.key.toLowerCase();
      const bKey = b.key.toLowerCase();

      if (aKey < bKey) { return -1; }
      if (aKey > bKey) { return 1; }
      return 0;
    });

    return buttons;
  }

  makeMonsterChooserButton(monsterName) {
    // is this monster already selected?
    const selected = this.state.monsterHealth.monsters[monsterName];

    let buttonClass = 'btn-scenario-chooser';
    if (selected) {
      buttonClass += ' btn-unlocked';
    }

    return (
      <Col key={monsterName} xs={6}>
        <Button block className={buttonClass} onClick={() => this.toggleChooseMonster(monsterName)}>{monsterName}</Button>
      </Col>
    );
  }

  toggleChooseMonster(monsterName) {
    this.setMonsterHealthState((monsterHealth) => {
      // find the monsters stats in the data structure
      const monsterType = this.getMonsterType(monsterName);

      if (monsterHealth.monsters[monsterName]) {
        // we already have this monster - remove it
        delete monsterHealth.monsters[monsterName];
      } else {
        // add this monster to the available types
        const monsters = [];

        for (let j = 0; j < monsterType.standeeCount; j++) {
          // add a monster record to the data structure
          monsters.push({
            name: monsterName,
            number: j + 1,
            elite: false,
            level: monsterHealth.defaultScenarioLevel,
            alive: false,
            damage: 0,
            statusTokens: [],
          });
        }

        monsterHealth.monsters[monsterName] = monsters;
      }

      // just clear the scenario since we're no longer sticking with the predefined monsters
      monsterHealth.scenario = -1;
    });
  }

  chooseScenario(scenarioNumber) {
    this.setMonsterHealthState((monsterHealth) => {
      monsterHealth.scenario = scenarioNumber;
    });
    this.scenarioGo();
    this.closeScenarioChooser();
  }

  isMonstersChosen() {
    for (const monster in this.state.monsterHealth.monsters) {
      if (this.state.monsterHealth.monsters.hasOwnProperty(monster)) {
        return true;
      }
    }
  }

  toggleHealChange(change) {
    let newAmount = this.state.healAmount + change;

    if (newAmount <= 0) {
      newAmount = 1;
    }

    this.setState({
      healAmount: newAmount,
    });
  }

  toggleHeal() {
    const healToggled = !this.state.healToggled;

    this.setState({
      healToggled,
      endMonsterRoundToggled: false,
      clearAllStatusEffectsToggled: false,
      statusTokensEnabled: [],
    });
  }

  toggleClearAllStatusEffects() {
    const clearAllStatusEffectsToggled = !this.state.clearAllStatusEffectsToggled;

    this.setState({
      healToggled: false,
      endMonsterRoundToggled: false,
      clearAllStatusEffectsToggled,
      statusTokensEnabled: [],
    });
  }

  toggleEndOfMonsterRound() {
    const endMonsterRoundToggled = !this.state.endMonsterRoundToggled;

    this.setState({
      healToggled: false,
      endMonsterRoundToggled,
      clearAllStatusEffectsToggled: false,
      statusTokensEnabled: [],
    });
  }

  render() {
    const scenarioLevelButtons = [];

    for (let i = 0; i <= 7; i++) {
      scenarioLevelButtons.push(this.createScenarioLevelButton(i, this.state.monsterHealth.defaultScenarioLevel));
    }

    const numCharactersButtons = [];

    for (let i = 2; i <= 4; i++) {
      numCharactersButtons.push(this.createNumCharactersButton(i, this.state.monsterHealth.defaultNumPlaying));
    }

    const monsterHeaderButtons = [];

    for (const monsterNameProperty in this.state.monsterHealth.monsters) {
      if (this.state.monsterHealth.monsters.hasOwnProperty(monsterNameProperty)) {
        monsterHeaderButtons.push(this.createMonsterHeaderButton(monsterNameProperty));
      }
    }

    monsterHeaderButtons.push(this.createMonsterHeaderActiveButton());

    const displayedMonsterSections = this.makeDisplayedMonsterSections();
    const statusTokenButtons = this.makeStatusTokenButtons();
    const scenarioChooserButtonsSections = this.makeScenarioChooserButtons();
    const monsterChooserButtons = this.makeMonsterChooserButtons();
    const statusEffectToggles = this.makeStatusEffectToggles();

    return (
      <div className="container monster-health-container">
        <Modal id="modal" show={this.state.statusTokenPopup !== ''} onHide={() => this.closeStatusTokenPopup()}>
          <Modal.Header closeButton>
            <Modal.Title>Status Effects for {this.state.statusTokenPopup.name} {this.state.statusTokenPopup.number}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="status-token-buttons row">
              {statusTokenButtons}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-blocked" onClick={() => this.closeStatusTokenPopup()}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal id="modal" show={this.state.showScenarioChooser} onHide={() => this.closeScenarioChooser()}>
          <Modal.Header closeButton>
            <Modal.Title>Choose Scenario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12}>
                <span>Warning: selecting a new scenario will wipe all unsaved existing monster health data.</span>
              </Col>
            </Row>
            <hr />
            {scenarioChooserButtonsSections}
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-blocked" onClick={() => this.closeScenarioChooser()}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal id="modal" show={this.state.showMonsterChooser} onHide={() => this.closeMonsterChooser()}>
          <Modal.Header closeButton>
            <Modal.Title>Choose Monsters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12}>
                <span>Warning: unselecting any monster type will wipe all unsaved existing monster health data for that monster.</span>
              </Col>
            </Row>
            <hr />
            <Row>
              {monsterChooserButtons}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-blocked" onClick={() => this.closeMonsterChooser()}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal id="modal" show={this.state.confirmKillMonster && this.state.confirmKillMonster !== null} onHide={() => this.closeConfirmKillMonster()}>
          <Modal.Header closeButton>
            <Modal.Title>Kill Monster</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12}>
                <span>Are you sure you want to kill this monster?</span>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Button block className="btn-completed" onClick={() => this.killMonster(this.state.confirmKillMonster)}>Kill</Button>
              </Col>
              <Col xs={6}>
                <Button block className="btn-blocked" onClick={() => this.closeConfirmKillMonster()}>Cancel</Button>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button className="btn-blocked" onClick={() => this.closeConfirmKillMonster()}>Close</Button> */}
          </Modal.Footer>
        </Modal>

        <Grid>
          <Row className="monster-health-row">
            <Col xs={12} md={7}>
              <Row>
                <Col xs={2}>
                  <div className="text-middle-button">Level</div>
                </Col>
                {scenarioLevelButtons}
              </Row>
            </Col>
            <Col xs={12} md={5}>
              <Row>
                <Col xs={2}>
                  <div className="text-middle-button">Chars</div>
                </Col>
                {numCharactersButtons}
              </Row>
            </Col>
          </Row>
          {this.state.monsterHealth.defaultScenarioLevel > -1 && this.state.monsterHealth.defaultNumPlaying > -1
            && (
            <Row className="monster-health-row">
              <Col xs={6} md={6}>
                <Button className="btn-completed" block onClick={() => this.showScenarioChooser()}>Scenario</Button>
              </Col>
              <Col xs={6} md={6}>
                <Button className="btn-completed" block onClick={() => this.showMonsterChooser()}>Monster Types</Button>
              </Col>
            </Row>
            )}
          {(this.state.monsterHealth.scenario > -1 || this.isMonstersChosen()) && (
            <Row className="monster-health-row">
              {monsterHeaderButtons}
            </Row>
            )}
          <Row className="monster-heath-monsters-container">
            {displayedMonsterSections}
          </Row>
          <hr />
          {(this.state.monsterHealth.scenario > -1 || this.isMonstersChosen()) && (
            <Row className="status-token-buttons">
              <Col xs={12} md={4}>
                <Button block onClick={() => this.clearStatusEffectToggles()}>Unselect All</Button>
              </Col>
              {statusEffectToggles}
              <Col xs={12} md={4}>
                <Button block className={this.state.endMonsterRoundToggled ? 'btn-unlocked' : ''} onClick={() => this.toggleEndOfMonsterRound()}>End Monster Turn</Button>
              </Col>
              <Col xs={12} md={4}>
                <Button block className={this.state.clearAllStatusEffectsToggled ? 'btn-unlocked' : ''} onClick={() => this.toggleClearAllStatusEffects()}>Clear All Status Effects</Button>
              </Col>
              <Col xs={6} md={2}>
                <Button block className={this.state.healToggled ? 'btn-unlocked' : ''} onClick={() => this.toggleHeal()}>
                  Heal {this.state.healAmount}
                </Button>
              </Col>
              <Col xs={3} md={1}>
                <Button block className="btn-unlocked" onClick={() => this.toggleHealChange(-1)}>-</Button>
              </Col>
              <Col xs={3} md={1}>
                <Button block className="btn-import" onClick={() => this.toggleHealChange(1)}>+</Button>
              </Col>
            </Row>
            )}
          <hr />
          <Row className="monster-health-row">
            <Col xs={12} md={12}>
              <p><strong>Instructions:</strong></p>
              <ol>
                <li>Select scenario level and number of characters</li>
                <li>Choose a scenario using the button provided or select particular monsters for random scenarios</li>
                <li>
                  To create monsters, press on the desired monster type
                  <ul>
                    <li>Each monster name has a number - this is the standee that it refers to</li>
                    <li>Tapping on the monster name will toggle between dead/normal/elite and whether or not the monster is a summon (represented by an asterix: *)</li>
                    <li>The individual scenario level for each monster is displayed to the right of the name (you can tap this to change it per monster)</li>
                    <li>Starting health will be the monster's health according to their level</li>
                  </ul>
                </li>
                <li>When you're done creating monsters, press the <strong>All Active</strong> button to show only monsters that are on the board</li>
                <li>The blue buttons control the monsters remaining health</li>
                <li>When viewing <strong>All Active monsters</strong>, pressing the monsters name will allow you to toggle the <strong>status effects</strong> applied to that monster</li>
                <li>When a monster is dead, press the <strong>Kill Monster</strong> button to remove them from the active list</li>
                <li>
                  The toggle buttons below the monster healt indicators allow you to apply and remove status effects from monsters in a different way. Toggle on one of the buttons and then press any of the monster buttons to apply the effect.
                  <ul>
                    <li><b>Unselect All</b> will toggle off all of the buttons</li>
                    <li><b>End Monster Turn</b> will remove all but the poison and would status effects from selected monsters (<b>CAUTION:</b> effects applied during a monsters turn (usually strengthen or invisibility) should not be removed this way - see game rules if unsure)</li>
                    <li><b>Clear All Status Effects</b> will remove all status effects from selected monsters</li>
                    <li><b>Heal X</b> will apply a healing effect to selected monsters, removing poison and wound and healing damage if applicable (the buttons to the right of this toggle button change the magnitude of the heal)</li>
                  </ul>
                </li>
              </ol>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MonsterHealthComponent;
