var template = {};

template.launch = {
  "session": {
    "new": true,
    "sessionId": "amzn1.echo-api.session.[unique-value-here]",
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.[unique-value-here]"
    },
    "application": {
      "applicationId": "amzn1.ask.skill.[unique-value-here]"
    }
  },
  "version": "1.0",
  "request": {
    "locale": "en-US",
    "timestamp": "2016-10-27T18:21:44Z",
    "type": "LaunchRequest",
    "requestId": "amzn1.echo-api.request.[unique-value-here]"
  },
  "context": {
    "AudioPlayer": {
      "playerActivity": "IDLE"
    },
    "System": {
      "device": {
        "supportedInterfaces": {
          "AudioPlayer": {}
        }
      },
      "application": {
        "applicationId": "amzn1.ask.skill.[unique-value-here]"
      },
      "user": {
        "userId": "amzn1.ask.account.[unique-value-here]"
      }
    }
  }
};

template.movieAndRating = {
  "session": {
    "sessionId": "SessionId.5ac179f7-6eca-483c-82df-01f0c7962ac8",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.1dc7a929-f2b3-4d8a-b625-4c0101e8834c",
    "locale": "de-DE",
    "timestamp": "2017-03-05T22:53:09Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "Harry Potter and the Sorcerer's Stone"
        }
      }
    }
  },
  "version": "1.0"
};

template.searchMovie = {
  "session": {
    "sessionId": "SessionId.fc011c52-413e-460b-b500-147251d266cd",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.b37c03b6-b10c-4398-9ea2-1a19bbe5095a",
    "locale": "de-DE",
    "timestamp": "2017-03-04T15:58:32Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "Matrix"
        }
      }
    }
  },
  "version": "1.0"
};

template.searchGermanMovieWithYear = {
  "session": {
    "sessionId": "SessionId.eb589180-5bfc-4284-9e9d-02cd354a7988",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.b5f9c3a6-a81b-41d9-9264-10f63fdb5cd9",
    "locale": "de-DE",
    "timestamp": "2017-03-11T15:47:11Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "herr der ringe"
        },
        "YEAR": {
          "name": "YEAR",
          "value": "2001"
        }
      }
    }
  },
  "version": "1.0"
};

template.searchJohnWick = {
  "session": {
    "sessionId": "SessionId.fc011c52-413e-460b-b500-147251d266cd",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.b37c03b6-b10c-4398-9ea2-1a19bbe5095a",
    "locale": "de-DE",
    "timestamp": "2017-03-04T15:58:32Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "john wick"
        }
      }
    }
  },
  "version": "1.0"
};

template.searchDogEatDog = {
  "session": {
    "sessionId": "SessionId.b33b9e4e-481d-4bfb-a967-24e59c5af69e",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.3fcc4394-256c-4fc8-b181-a6fdf675d7b7",
    "locale": "de-DE",
    "timestamp": "2017-03-11T23:05:37Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "dog eat dog"
        },
        "YEAR": {
          "name": "YEAR",
          "value": "2016"
        }
      }
    }
  },
  "version": "1.0"
};

template.searchXXX = {
  "session": {
    "sessionId": "SessionId.d3528b3d-aadd-429b-b8f9-1a2cd8129ea0",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {
      "imdb_movies": [
        "{\"Response\":\"true\",\"Title\":\"John Wick: Kapitel 2\",\"Year\":\"2017\",\"Id\":\"tt4425200\",\"imdbRating\":\"8.1\"}",
        "{\"Response\":\"true\",\"Title\":\"John Wick\",\"Year\":\"2014\",\"Id\":\"tt2911666\",\"imdbRating\":\"7.2\"}"
      ],
      "imdb_menu": {
        "history": [
          {
            "menue": "main"
          },
          {
            "menue": "movieList"
          }
        ]
      },
      "imdb_searchedFor": {
        "movie": "john wick"
      }
    },
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": false
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.14a0cec0-a0d6-4d0b-bf29-117f62700bcc",
    "locale": "de-DE",
    "timestamp": "2017-03-12T00:43:36Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "die rückkehr des xander cage"
        },
        "YEAR": {
          "name": "YEAR"
        }
      }
    }
  },
  "version": "1.0"
};

template.repeat = {
  "session": {
    "sessionId": "SessionId.a6ddf1d4-3759-4d82-8a62-39b02032dbd6",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {
      "imdb_movies": [
        "{\"Response\":\"true\",\"Title\":\"Der Herr der Ringe - Die Gefährten\",\"Year\":\"2001\",\"Id\":\"tt0120737\",\"imdbRating\":\"8.8\"}",
        "{\"Response\":\"true\",\"Title\":\"Der Herr der Ringe - Die Rückkehr des Königs\",\"Year\":\"2003\",\"Id\":\"tt0167260\",\"imdbRating\":\"8.9\"}",
        "{\"Response\":\"true\",\"Title\":\"Der Herr der Ringe - Die zwei Türme\",\"Year\":\"2002\",\"Id\":\"tt0167261\",\"imdbRating\":\"8.7\"}",
        "{\"Response\":\"true\",\"Title\":\"Ellery Queen and the Murder Ring\",\"Year\":\"1941\",\"Id\":\"tt0033572\",\"imdbRating\":\"6.2\"}"
      ]
    },
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.6e9b83c1-478c-476d-bfb8-c7a19f15fe0a",
    "locale": "de-DE",
    "timestamp": "2017-03-22T22:08:35Z",
    "intent": {
      "name": "RepeatIntent",
      "slots": { }
    }
  },
  "version": "1.0"
};

template.searchLalaLand = {
  "session": {
    "sessionId": "SessionId.9d5aa58d-6d72-4067-abc8-861bba9c5805",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.9bc7f946-cce8-4447-b69c-c180f0e8c935",
    "locale": "de-DE",
    "timestamp": "2017-03-22T23:02:32Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "la la land"
        }
      }
    }
  },
  "version": "1.0"
};

template.help = {
  "session": {
    "sessionId": "SessionId.73039e6a-f69e-438d-9d1e-6f7bfa954e49",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.30cf8088-6ad9-4fd2-8587-2a5c4c9ad12c",
    "locale": "de-DE",
    "timestamp": "2017-03-05T20:15:20Z",
    "intent": {
      "name": "AMAZON.HelpIntent",
      "slots": {}
    }
  },
  "version": "1.0"
};

template.searchZehnGebote = {
  "session": {
    "sessionId": "SessionId.a0bedea9-a466-47e0-81ce-755fbe8a5981",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.6f6c122c-a5a5-408e-acc8-6404207c1827",
    "locale": "de-DE",
    "timestamp": "2017-04-02T17:52:28Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "die zehn gebote"
        },
        "YEAR": {
          "name": "YEAR"
        }
      }
    }
  },
  "version": "1.0"
};

template.searchDerPate = {
  "session": {
    "sessionId": "SessionId.2b9b58d4-bc72-4aed-82cb-300452ece1aa",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.53ed19cf-d0ed-4b24-88a1-f61aa9ff6bfb",
    "locale": "de-DE",
    "timestamp": "2017-04-04T20:34:05Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "der pate"
        },
        "YEAR": {
          "name": "YEAR"
        }
      }
    }
  },
  "version": "1.0"
};

template.matrixStrReplaceError = {
  "session": {
    "sessionId": "SessionId.a6ddf1d4-3759-4d82-8a62-39b02032dbd6",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {
      "imdb_movies": [
        "{\"Response\":\"true\",\"Title\":\"Matrix\",\"Year\":\"1999\",\"Id\":\"tt0133093\",\"imdbRating\":\"8.7\"}",
        "{\"Response\":\"true\",\"Title\":\"Matrix Reloaded\",\"Year\":\"2003\",\"Id\":\"tt0234215\",\"imdbRating\":\"7.2\"}",
        "{\"Response\":\"true\",\"Title\":\"Matrix Revolutions\",\"Year\":\"2003\",\"Id\":\"tt0242653\",\"imdbRating\":\"6.7\"}",
        "{\"Response\":\"true\",\"Title\":\"The Matrix Reloaded Revisited\",\"Year\":\"2004\",\"Id\":\"tt1830850\",\"imdbRating\":\"6.8\"}",
        "{\"Response\":\"true\",\"Title\":\"The Matrix Revolutions Revisited\",\"Year\":\"2004\",\"Id\":\"tt1830851\",\"imdbRating\":\"5.8\"}"
      ]
    },
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.6e9b83c1-478c-476d-bfb8-c7a19f15fe0a",
    "locale": "de-DE",
    "timestamp": "2017-03-22T22:08:35Z",
    "intent": {
      "name": "ChooseIntent",
      "slots": {
        "ENUMERATION": {
          "name": "ENUMERATION",
          "value": "vierter"
        }
      }
    }
  },
  "version": "1.0"
};

template.searchStarWarsEpisode3 = {
  "session": {
    "sessionId": "SessionId.fc011c52-413e-460b-b500-147251d266cd",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.b37c03b6-b10c-4398-9ea2-1a19bbe5095a",
    "locale": "de-DE",
    "timestamp": "2017-03-04T15:58:32Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "star wars episode drei"
        }
      }
    }
  },
  "version": "1.0"
};

template.searchStarWarsEpisode2 = {
  "session": {
    "sessionId": "SessionId.fc011c52-413e-460b-b500-147251d266cd",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.b37c03b6-b10c-4398-9ea2-1a19bbe5095a",
    "locale": "de-DE",
    "timestamp": "2017-03-04T15:58:32Z",
    "intent": {
      "name": "SearchIntent",
      "slots": {
        "MOVIE": {
          "name": "MOVIE",
          "value": "star wars episode zwei"
        },
        "YEAR": {
          "name": "YEAR",
          "value": "2002"
        }
      }
    }
  },
  "version": "1.0"
};

template.fifthPart = {
  "session": {
    "sessionId": "SessionId.a6ddf1d4-3759-4d82-8a62-39b02032dbd6",
    "application": {
      "applicationId": "amzn1.ask.skill.81ad5dfb-a077-4bc7-a4ae-85820ebb8a1b"
    },
    "attributes": {
      "imdb_movies": [
        "{\"Response\":\"true\",\"Title\":\"Der Herr der Ringe - Die Gefährten\",\"Year\":\"2001\",\"Id\":\"tt0120737\",\"imdbRating\":\"8.8\"}",
        "{\"Response\":\"true\",\"Title\":\"Der Herr der Ringe - Die Rückkehr des Königs\",\"Year\":\"2003\",\"Id\":\"tt0167260\",\"imdbRating\":\"8.9\"}",
        "{\"Response\":\"true\",\"Title\":\"Der Herr der Ringe - Die zwei Türme\",\"Year\":\"2002\",\"Id\":\"tt0167261\",\"imdbRating\":\"8.7\"}",
      ],
      "imdb_menu": {
        "history": [
          {
            "menue": "main"
          },
          {
            "menue": "movieList"
          }
        ]
      }
    },
    "user": {
      "userId": "amzn1.ask.account.AE5B4PL24QQDV7CKJZOQXPEWO7AF7TFYHCVR2LU5TFYLAIJFNNCM32OVNGO5ZZA4QDG7XI2TTMG2E5KDNYYRWSSNYNFRUJECXRYJRJSEP4SCTKY37HG7Z34LTLLBVD5XXYVQYQDIJJFSSLCLR3Y66LKOMQIJEZWLUUHDANWPGN3IXQHDQKOCE47XY7TTNA6AELHZWPSKV2IW56I"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.6e9b83c1-478c-476d-bfb8-c7a19f15fe0a",
    "locale": "de-DE",
    "timestamp": "2017-03-22T22:08:35Z",
    "intent": {
      "name": "ChooseIntent",
      "slots": {
        "ENUMERATION": {
          "name": "ENUMERATION",
          "value": "fünfter"
        }
      }
    }
  },
  "version": "1.0"
};

module.exports = template;