setup.createFaction = function(base) {
  var faction = {};
  var baseName = "Faction";
  var type = ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles", "bards", "mercenaries", "bandits"].random();
  var leadershipType = ["individual", "individual", "individual", "group", "group"];
  var isPoliticalPower;
  var leaders = [];
  var leadershipGeneration = {};

  var reputationRoll = dice(2, 50);
  var reputation;
  var influenceRoll = dice(2, 50);
  var influence;
  var ageRoll = dice(2, 50);
  var age;
  var sizeRoll = dice(2, 50);
  var size;
  var stabilityRoll = dice(2, 50);
  var stability;
  var resourcesRoll = dice(2, 50);
  var resources;

  var faction = Object.assign({
    isPoliticalPower: isPoliticalPower,
    // type: ["thieves", "merchants", "wizards", "rangers", "seers", "priests", "monks", "assassins", "artisans", "nobles", "bards"].random(),
    type: "wizards",
    motivation: setup.motivationFaction(faction),
    leadershipType: "individual",
    // leadershipType: leadershipType.random(),
    influenceRoll: influenceRoll,
    reputationRoll : reputationRoll,
    ageRoll: ageRoll,
    sizeRoll: sizeRoll,
    stabilityRoll: stabilityRoll,
    resourcesRoll: resourcesRoll,
    influence: influence,
    reputation : reputation,
    age: age,
    size: size,
    stability: stability,
    resources: resources,
  }, base);

  faction.name = setup.nameFaction(faction);
  faction.age = setup.ageFaction(faction);
  faction.reputation = setup.reputationFaction(faction);
  faction.size = setup.sizeFaction(faction);
  faction.influence = setup.influenceFaction(faction);
  faction.resources = setup.resourcesFaction(faction);
  faction.stability = setup.stabilityFaction(faction);

  setup.leaderFaction(faction);
  setup.joinFaction(faction);

  // State.variables.factions.set(baseName + ++index, faction)};

  return faction;

};
