export default function () {
  return {
    name: "Sebastian",
    userDetails: {},
    moodLogs: [
      {
        "id": 1234,
        "date": "today",
        "upsettingEvent": "Dies und das",
        "finished": true,
        "emotions": [
          {
            "id": 1,
            "emotion": "sad",
            "intensityBefore": 100,
            "intensityGoal": 10,
            "intensityAfter": 12,
            "paradoxical": ["Bla1", "Bla2", "..."]
          },
          {
            "id": 2,
            "emotion": "hopeless",
            "intensityBefore": 100,
            "intensityGoal": 10,
            "intensityAfter": 12,
            "paradoxical": ["Bla1", "Bla2", "..."]
          }
        ],
        "thoughts": [
          {
            "id": 1,
            "thought": "blaaaaaaaaaaa",
            "distortions": [true, false, true, false, false],
            "challenge": "Blub",
            "alternativeThought": "So soll es sein"
          },
          {
            "id": 2,
            "thought": "blsdadsdaaaaaaaaaaaa",
            "distortions": [true, false, true, false, false],
            "challenge": "Bluasdsadb",
            "alternativeThought": "So sasdasdoll es sein"
          }
        ]
      },
      {
        "id": 123412,
        "date": "today",
        "upsettingEvent": "Anderer Grund",
        "finished": false,
        "emotions": [
          {
            "id": 1,
            "emotion": "worthless",
            "intensityBefore": 100,
            "intensityGoal": 10,
            "intensityAfter": 12,
            "paradoxical": ["Bla1", "Bla2", "..."]
          },
          {
            "id": 2,
            "emotion": "down",
            "intensityBefore": 100,
            "intensityGoal": 10,
            "intensityAfter": 12,
            "paradoxical": ["Bla1", "Bla2", "..."]
          }
        ],
        "thoughts": [
          {
            "id": 1,
            "thought": "asdasdasdasd",
            "distortions": [true, false, true, false, false],
            "challenge": "Blub",
            "alternativeThought": "So soll es sein"
          },
          {
            "id": 2,
            "thought": "blsdadsdaaasdaaasfasfaaaaaaaaa",
            "distortions": [true, false, true, false, false],
            "challenge": "Bluasdsadb",
            "alternativeThought": "So sasdasdoll es sein"
          }
        ]
      }
    ]
  }
}
