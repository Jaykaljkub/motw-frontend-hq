export const playbooks = [
  {
    name: 'The Chosen',
    description: 'Your birth was prophesied. You are the Chosen One, and with your abilities, you can save the world. If you fail, all will be destroyed. It all rests on you. Only you.',
    moves: [
        {
            name: "Destiny’s Plaything",
            description: "At the beginning of each mystery, roll +Weird to see what is revealed about your immediate future."
        },
        {
            name: "I’m Here For A Reason",
            description: "There’s something you are meant to do; work out the signs to find out what."
        },
        {
            name: "The Big Entrance",
            description: "When you make a showy entrance, roll +Charm."
        },
        {
            name: "Devastating",
            description: "When you inflict harm, you inflict +1 harm."
        },
        {
            name: "Dutiful",
            description: "You gain +1 ongoing while you follow a duty."
        },
        {
            name: "Invincible",
            description: "You always count as having 2-armour."
        },
        {
            name: "Resilience",
            description: "You heal faster than normal people."
        }
    ],
    gear: [
      'Protective gear worth 1-armour',
      'Special weapon'
    ],
    ratings: [
      'Charm+2, Cool-1, Sharp+1, Tough+2, Weird-1',
      'Charm-1, Cool+2, Sharp+1, Tough+2, Weird-1',
      'Charm+1, Cool+2, Sharp+1, Tough+1, Weird-1',
      'Charm-1, Cool+1, Sharp+2, Tough-1, Weird+2',
      'Charm+1, Cool+2, Sharp-1, Tough-1, Weird+2'
    ],
    special: 'When you spend a point of Luck, the Keeper will bring your fate into play.'
  },
  {
    name: 'The Crooked',
    description: '“Yeah, I’ve been around the block. A bit of this, a bit of that. When I came across the secret underworld of monsters and magic… well… it wasn’t so different from the underworld I already knew. It was easy to find an angle, just like before.”',
    moves: [
        {
            name: "Hoodlum",
            description: "When you get into trouble, roll +Cool."
        },
        {
            name: "Burglar",
            description: "When you break into a secure location, roll +Cool."
        },
        {
            name: "Grifter",
            description: "When you try to dupe someone, roll +Charm."
        },
        {
            name: "Fixer",
            description: "When you need something, roll +Sharp."
        },
        {
            name: "Assassin",
            description: "When you attack from ambush, roll +Cool."
        },
        {
            name: "Charlatan",
            description: "When you try to lie to someone, roll +Charm."
        },
        {
            name: "Pickpocket",
            description: "When you try to steal something, roll +Cool."
        }
    ],
    gear: [
      '.22 revolver (1-harm close reload small)',
      '.38 revolver (2-harm close reload loud)',
      '9mm (2-harm close loud)',
      'Shotgun (3-harm close messy)',
      'Hunting rifle (2-harm far loud)',
      'Big knife (1-harm hand)',
      'Baseball bat (1-harm hand)',
      'Submachinegun (2-harm close reload area)',
      'Assault rifle (3-harm close/far area)'
    ],
    ratings: [
      'Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1',
      'Charm -1, Cool +1, Sharp +1, Tough +2, Weird 0',
      'Charm -1, Cool +2, Sharp +2, Tough 0, Weird -1',
      'Charm +2, Cool +1, Sharp +1, Tough 0, Weird -1',
      'Charm +2, Cool 0, Sharp +1, Tough -1, Weird +1'
    ],
    special: 'Whenever you spend a Luck point, someone from your past will re-appear in your life. Soon.'
  },
  {
    name: 'The Divine',
    description: 'An agent of a higher power, sent to fight evil. You have a mission and heavenly powers to back you up.',
    moves: [
      {
        name: "Angel Wings",
        description: "You can go instantly to anywhere you’ve visited before, or to a person you know well. When you carry one or two people with you, roll +Weird."
      },
      {
        name: "Smite",
        description: "Your body and divine weapon always count as a weakness against the monsters you fight."
      },
      {
        name: "Soothe",
        description: "When you talk to someone for a few seconds in a quiet voice, you can calm them down, blocking any panic, anger, or other negative emotions."
      },
      {
        name: "What I Need, When I Need It",
        description: "You may store any useful item or piece of information somewhere close at hand."
      },
      {
        name: "Lay On Hands",
        description: "Your touch can heal injury and disease. When you lay your hands on someone hurt, roll +Cool."
      },
      {
        name: "Angel’s Call",
        description: "You can summon an angelic ally to assist you. Roll +Weird."
      }
    ],
    gear: [
      'Divine weapon (3-harm hand messy holy)',
      'Holy armor (1-armour holy)'
    ],
    ratings: [
      'Charm +2, Cool +1, Sharp +0, Tough +2, Weird -1',
      'Charm +1, Cool +2, Sharp +0, Tough +2, Weird -1',
      'Charm +2, Cool +1, Sharp +1, Tough +0, Weird +1',
      'Charm +0, Cool +1, Sharp +2, Tough +1, Weird -1',
      'Charm +2, Cool +0, Sharp +1, Tough +2, Weird -1'
    ],
    special: 'When you spend a point of Luck, your higher power gives you a vision about the current mystery.'
  },
  {
    name: 'The Flake',
    description: 'You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world.',
    moves: [
        {
            name: "Connect the Dots",
            description: "You see patterns that others don’t. You’re the one who connects the dots and sees the truth about the world."
          },
          {
            name: "Crazy Eyes",
            description: "When you use your sharp gaze to study something, roll +Sharp."
          },
          {
            name: "Net Friends",
            description: "When you contact your network of friends, roll +Charm."
          },
          {
            name: "Sneaky",
            description: "When you try to be sneaky, roll +Cool."
          },
          {
            name: "Suspicious Mind",
            description: "When you try to figure out if someone is lying, roll +Sharp."
          },
          {
            name: "The Big Picture",
            description: "When you start a mystery, roll +Sharp."
          },
          {
            name: "Often Overlooked",
            description: "When you act all quiet and out of the way, roll +Cool."
          }
    ],
    gear: [
      'Hunting rifle (2-harm far loud)',
      'Shotgun (3-harm close messy)',
      'Big knife (1-harm hand)',
      'Baseball bat (1-harm hand)'
    ],
    ratings: [
      'Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1',
      'Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0',
      'Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0',
      'Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1'
    ],
    special: 'Whenever you spend a Luck point, you have a vision about the current mystery.'
  },
  {
    name: 'The Expert',
    description: 'You have devoted your life to researching the supernatural and finding ways to deal with it. You have the knowledge and the tools to deal with these threats.',
    moves: [
        {
            name: "I’ve Read About This Sort of Thing",
            description: "You’ve read books, and you can use that knowledge."
          },
          {
            name: "Preparedness",
            description: "If you need something unusual, roll +Sharp."
          },
          {
            name: "Always the Victim",
            description: "When you’re attacked, roll +Cool."
          },
          {
            name: "Dark Past",
            description: "When you look into your past lives, roll +Weird."
          },
          {
            name: "Often Right",
            description: "When you’re right about something, gain +1 ongoing."
          },
          {
            name: "Soothe",
            description: "When you talk to someone for a few seconds, roll +Charm."
          },
          {
            name: "The Big Picture",
            description: "When you start a mystery, roll +Sharp."
          }
    ],
    gear: [
      'Shotgun (3-harm close messy)',
      'Big knife (1-harm hand)',
      'Sword (3-harm hand)'
    ],
    ratings: [
      'Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1',
      'Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0',
      'Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1',
      'Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0'
    ],
    special: 'Whenever you spend a Luck point, something you have prepared comes in handy.'
  },
  {
    name: 'The Initiate',
    description: 'You are part of an ancient secret order that fights against the darkness. You have access to their knowledge and resources.',
    moves: [
        {
            name: "Ancient Fighting Arts",
            description: "You have been trained to fight with ancient weapons. Roll +Tough."
          },
          {
            name: "Fortunes",
            description: "When you seek your order’s knowledge, roll +Weird."
          },
          {
            name: "Mentor",
            description: "You have a mentor who can help you. Roll +Charm."
          },
          {
            name: "Apprentice",
            description: "You are training someone. Roll +Sharp."
          },
          {
            name: "Sacred Oath",
            description: "You have sworn a sacred oath. Roll +Cool."
          },
          {
            name: "The Big Picture",
            description: "When you start a mystery, roll +Sharp."
          },
          {
            name: "Resilience",
            description: "You heal faster than normal people."
          }
    ],
    gear: [
      'Big knife (1-harm hand)',
      'Sword (2-harm hand)',
      'Shotgun (3-harm close messy)',
      'Hunting rifle (2-harm far loud)'
    ],
    ratings: [
      'Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1',
      'Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0',
      'Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1',
      'Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0'
    ],
    special: 'Whenever you spend a Luck point, your order provides you with valuable information or resources.'
  },
  {
    name: 'The Monstrous',
    description: 'You are a creature of the night, but you fight for the good guys. You have supernatural abilities and a dark side.',
    moves: [
        {
            name: "Immortal",
            description: "You do not age, and you cannot die of old age. Roll +Weird."
          },
          {
            name: "Unholy Strength",
            description: "You have inhuman strength. Roll +Tough."
          },
          {
            name: "Preternatural Speed",
            description: "You have inhuman speed. Roll +Cool."
          },
          {
            name: "Dark Negotiator",
            description: "You can make deals with dark powers. Roll +Charm."
          },
          {
            name: "The Big Picture",
            description: "When you start a mystery, roll +Sharp."
          },
          {
            name: "Resilience",
            description: "You heal faster than normal people."
          },
          {
            name: "Natural Attack",
            description: "You have a natural attack. Roll +Tough."
          }
    ],
    gear: [
      'Claws (3-harm hand)',
      'Fangs (2-harm intimate)'
    ],
    ratings: [
      'Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1',
      'Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0',
      'Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1',
      'Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0'
    ],
    special: 'Whenever you spend a Luck point, your dark side’s needs come to the fore.'
  },
  {
    name: 'The Mundane',
    description: 'You are an ordinary person, caught up in the world of monsters and magic.',
    moves: [
        {
            name: "Always the Victim",
            description: "When you’re attacked, roll +Cool."
          },
          {
            name: "Don’t Worry, I’ll Check It Out",
            description: "When you go off alone to check out somewhere, roll +Cool."
          },
          {
            name: "Let’s Get Out of Here",
            description: "When you lead people out of danger, roll +Charm."
          },
          {
            name: "What Could Go Wrong?",
            description: "When you charge into immediate danger without hedging your bets, roll +Cool."
          },
          {
            name: "Trust Me",
            description: "When you tell a normal person the truth in order to protect them, roll +Charm."
          },
          {
            name: "Panic Button",
            description: "When you need to escape, roll +Cool."
          },
          {
            name: "The Power of Heart",
            description: "When fighting a monster, if you help someone, roll +Charm."
          }
    ],
    gear: [
      'Kitchen knife (1-harm hand)',
      'Baseball bat (1-harm hand)',
      'Fire axe (3-harm hand heavy)',
      'Chainsaw (3-harm hand messy heavy)'
    ],
    ratings: [
      'Charm +2, Cool 0, Sharp +1, Tough 0, Weird -1',
      'Charm +1, Cool +2, Sharp 0, Tough 0, Weird -1',
      'Charm +2, Cool +1, Sharp 0, Tough -1, Weird 0',
      'Charm +2, Cool 0, Sharp -1, Tough +1, Weird 0'
    ],
    special: 'Whenever you spend a Luck point, something goes terribly wrong.'
  },
  {
    name: 'The Professional',
    description: 'You work for an organization that fights the supernatural. You have the training and resources to deal with these threats.',
    moves: [
        {
            name: "Battlefield Awareness",
            description: "You always know what’s happening around you. Roll +Sharp."
          },
          {
            name: "Tactical Genius",
            description: "When you plan a combat situation, roll +Sharp."
          },
          {
            name: "Heavy Weapons",
            description: "You are trained in the use of heavy weapons. Roll +Tough."
          },
          {
            name: "The Big Picture",
            description: "When you start a mystery, roll +Sharp."
          },
          {
            name: "Resilience",
            description: "You heal faster than normal people."
          },
          {
            name: "Cool Under Pressure",
            description: "You can take a moment to center yourself. Roll +Cool."
          }
    ],
    gear: [
      'Assault rifle (3-harm close/far area)',
      'Submachinegun (2-harm close area)',
      'Shotgun (3-harm close messy)',
      'Hunting rifle (2-harm far loud)'
    ],
    ratings: [
      'Charm +1, Cool +2, Sharp +1, Tough 0, Weird -1',
      'Charm -1, Cool +2, Sharp +2, Tough 0, Weird 0',
      'Charm +2, Cool +1, Sharp +2, Tough -1, Weird 0',
      'Charm +1, Cool +1, Sharp +2, Tough 0, Weird +1'
    ],
    special: 'Whenever you spend a Luck point, your organization provides you with valuable resources or support.'
  },
  {
    name: 'The Spooky',
    description: 'You have psychic or supernatural abilities, but they come with a cost. Your powers are both a blessing and a curse.',
    moves: [
        {
            name: "Premonitions",
            description: "You get premonitions of danger. Roll +Weird."
          },
          {
            name: "The Big Whammy",
            description: "You can use your powers as a weapon. Roll +Weird."
          },
          {
            name: "Hex",
            description: "You can cast hexes. Roll +Weird."
          },
          {
            name: "The Sight",
            description: "You can see the invisible, especially spirits and magical influences. Roll +Weird."
          },
          {
            name: "Jinx",
            description: "You can encourage coincidences to occur, the way you want. Roll +Weird."
          },
          {
            name: "The Big Picture",
            description: "When you start a mystery, roll +Sharp."
          },
          {
            name: "Resilience",
            description: "You heal faster than normal people."
          }
    ],
    gear: [
      'Protective amulet (1-armour)',
      'Ancient weapon (2-harm hand)'
    ],
    ratings: [
      'Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1',
      'Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0',
      'Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1',
      'Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0'
    ],
    special: 'Whenever you spend a Luck point, your powers backfire in a dangerous way.'
   },
   {
    name: 'The Wronged',
    description: 'You have suffered at the hands of the supernatural, and now you seek revenge. You are driven by anger and a need for justice.',
    moves: [
        {
            name: "I Know My Prey",
            description: "You have learned about your prey through personal experience. Roll +Sharp."
          },
          {
            name: "Berserk",
            description: "When you are enraged, you can fight without any concern for your own safety. Roll +Tough."
          },
          {
            name: "NEVER AGAIN",
            description: "In combat, you may choose to protect someone without rolling. Roll +Tough."
          },
          {
            name: "What Does Not Kill Me…",
            description: "If you survive an injury, you gain +1 forward. Roll +Cool."
          },
          {
            name: "The Big Picture",
            description: "When you start a mystery, roll +Sharp."
          },
          {
            name: "Resilience",
            description: "You heal faster than normal people."
          }
    ],
    gear: [
      'Hunting rifle (2-harm far loud)',
      'Shotgun (3-harm close messy)',
      'Big knife (1-harm hand)',
      'Baseball bat (1-harm hand)'
    ],
    ratings: [
      'Charm +1, Cool +1, Sharp +2, Tough 0, Weird -1',
      'Charm -1, Cool +1, Sharp +2, Tough +1, Weird 0',
      'Charm +1, Cool +2, Sharp +2, Tough 0, Weird -1',
      'Charm +2, Cool +1, Sharp +1, Tough 0, Weird 0'
    ],
    special: 'Whenever you spend a Luck point, you are driven to a reckless course of action.'
  }  
];
