// Sample data for the AyurVignana application
// In a production environment, this data would come from a database

export const herbsData = [
    {
      id: 1,
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      image: "/images/herbs/ashwagandha.jpg",
      properties: "Adaptogenic, immunomodulatory, anti-inflammatory, and rejuvenating",
      benefits: [
        "Reduces stress and anxiety",
        "Boosts immunity",
        "Improves sleep quality",
        "Enhances stamina and energy",
        "Supports cognitive function"
      ],
      doshaEffect: {
        vata: {
          effect: "balancing",
          description: "Helps reduce Vata with its warming and nourishing properties."
        },
        pitta: {
          effect: "increasing",
          description: "May increase Pitta in high doses due to its warming energy."
        },
        kapha: {
          effect: "balancing",
          description: "Helps balance Kapha with its drying and stimulating qualities."
        }
      },
      usage: "Take 1-2 teaspoons of Ashwagandha powder with warm milk or water, once or twice daily. Can also be consumed as capsules (300-500mg) or as a liquid extract."
    },
    {
      id: 2,
      name: "Tulsi (Holy Basil)",
      scientificName: "Ocimum sanctum",
      image: "/images/herbs/tulsi.jpg",
      properties: "Adaptogenic, antioxidant, antimicrobial, and immunomodulatory",
      benefits: [
        "Supports respiratory health",
        "Reduces stress and anxiety",
        "Promotes cardiovascular health",
        "Helps manage fever and common colds",
        "Enhances digestion"
      ],
      doshaEffect: {
        vata: {
          effect: "balancing",
          description: "In moderation, helps balance Vata with its warming properties."
        },
        pitta: {
          effect: "increasing",
          description: "Can increase Pitta due to its warming and pungent qualities."
        },
        kapha: {
          effect: "reducing",
          description: "Excellent for reducing Kapha with its light, dry, and warming energy."
        }
      },
      usage: "Consume 2-3 fresh Tulsi leaves daily or prepare Tulsi tea by steeping 1 teaspoon of dried Tulsi leaves in hot water for 5-10 minutes. Can also be taken as capsules or liquid extract."
    },
    {
      id: 3,
      name: "Turmeric",
      scientificName: "Curcuma longa",
      image: "/images/herbs/turmeric.jpg",
      properties: "Anti-inflammatory, antioxidant, antimicrobial, and hepatoprotective",
      benefits: [
        "Reduces inflammation and pain",
        "Supports joint health",
        "Improves digestion",
        "Promotes skin health",
        "Enhances immune function"
      ],
      doshaEffect: {
        vata: {
          effect: "balancing",
          description: "In moderation, balances Vata with its warming properties."
        },
        pitta: {
          effect: "balancing",
          description: "In moderate amounts, can help balance Pitta despite its warming nature."
        },
        kapha: {
          effect: "reducing",
          description: "Excellent for reducing Kapha with its drying and warming qualities."
        }
      },
      usage: "Take 1/2 to 1 teaspoon of turmeric powder with a pinch of black pepper daily. Can be added to warm milk (Golden Milk), food, or taken as capsules (400-600mg) with meals."
    },
    {
      id: 4,
      name: "Brahmi",
      scientificName: "Bacopa monnieri",
      image: "/images/herbs/brahmi.jpg",
      properties: "Adaptogenic, nootropic, anxiolytic, and rejuvenating",
      benefits: [
        "Enhances memory and cognitive function",
        "Reduces anxiety and stress",
        "Supports nervous system health",
        "Improves concentration and focus",
        "Promotes longevity"
      ],
      doshaEffect: {
        vata: {
          effect: "reducing",
          description: "Excellent for calming and balancing Vata with its cooling properties."
        },
        pitta: {
          effect: "reducing",
          description: "Highly beneficial for Pitta with its cooling and sweet qualities."
        },
        kapha: {
          effect: "slightly increasing",
          description: "May increase Kapha in excess due to its cooling and moist nature."
        }
      },
      usage: "Take 1/4 to 1/2 teaspoon of Brahmi powder with warm water or ghee. Can also be consumed as tea, capsules (300-500mg), or in medicated ghee preparations."
    },
    {
      id: 5,
      name: "Amalaki (Indian Gooseberry)",
      scientificName: "Emblica officinalis",
      image: "/images/herbs/amalaki.jpg",
      properties: "Rejuvenating, antioxidant, immunomodulatory, and digestive",
      benefits: [
        "Supports immune system function",
        "Promotes healthy digestion",
        "Enhances skin health and complexion",
        "Supports liver function",
        "Rich source of vitamin C"
      ],
      doshaEffect: {
        vata: {
          effect: "balancing",
          description: "Balances Vata when combined with warming herbs or honey."
        },
        pitta: {
          effect: "reducing",
          description: "Excellent for reducing Pitta with its cooling and sweet properties."
        },
        kapha: {
          effect: "balancing",
          description: "Generally balances Kapha, though its sour taste can increase it in excess."
        }
      },
      usage: "Take 1-2 teaspoons of Amalaki powder with honey or warm water daily. Available as fresh fruit, juice, powder, tablets, or as part of Triphala formulation."
    }
  ];
  
  export const recommendationsData = [
    {
      id: 1,
      name: "Ginger",
      scientificName: "Zingiber officinale",
      image: "/images/herbs/ginger.jpg",
      relatedSymptoms: [
        "Nausea",
        "Indigestion",
        "Motion sickness",
        "Cold",
        "Cough",
        "Respiratory congestion"
      ],
      dosage: "Fresh: Chew 1-2 thin slices or add to tea. Dried powder: 1/4 to 1/2 teaspoon, 1-3 times daily. Best taken with meals for digestive issues or with honey for respiratory conditions.",
      doshaEffect: {
        vata: {
          effect: "reducing"
        },
        pitta: {
          effect: "increasing"
        },
        kapha: {
          effect: "reducing"
        }
      }
    },
    {
      id: 2,
      name: "Triphala",
      scientificName: "Combination of three fruits",
      image: "/images/herbs/triphala.jpg",
      relatedSymptoms: [
        "Constipation",
        "Digestive issues",
        "Bloating",
        "Eye strain",
        "Poor digestion",
        "Toxin buildup"
      ],
      dosage: "1/2 to 1 teaspoon of Triphala powder in warm water before bed or in the morning on an empty stomach. Can also be taken as tablets (500-1000mg) once or twice daily.",
      doshaEffect: {
        vata: {
          effect: "balancing"
        },
        pitta: {
          effect: "balancing"
        },
        kapha: {
          effect: "balancing"
        }
      }
    },
    {
      id: 3,
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      image: "/images/herbs/ashwagandha.jpg",
      relatedSymptoms: [
        "Stress",
        "Anxiety",
        "Fatigue",
        "Insomnia",
        "Low energy",
        "Weak immunity"
      ],
      dosage: "1/4 to 1/2 teaspoon of Ashwagandha powder with warm milk or water before bed. Can also be taken as capsules (300-500mg) once or twice daily.",
      doshaEffect: {
        vata: {
          effect: "reducing"
        },
        pitta: {
          effect: "slightly increasing"
        },
        kapha: {
          effect: "balancing"
        }
      }
    },
    {
      id: 4,
      name: "Brahmi",
      scientificName: "Bacopa monnieri",
      image: "/images/herbs/brahmi.jpg",
      relatedSymptoms: [
        "Memory issues",
        "Poor concentration",
        "Mental fatigue",
        "Anxiety",
        "Stress",
        "Headache"
      ],
      dosage: "1/4 to 1/2 teaspoon of Brahmi powder with warm water or ghee, once or twice daily. Can also be taken as capsules (300-500mg) with meals.",
      doshaEffect: {
        vata: {
          effect: "reducing"
        },
        pitta: {
          effect: "reducing"
        },
        kapha: {
          effect: "slightly increasing"
        }
      }
    },
    {
      id: 5,
      name: "Tulsi (Holy Basil)",
      scientificName: "Ocimum sanctum",
      image: "/images/herbs/tulsi.jpg",
      relatedSymptoms: [
        "Common cold",
        "Cough",
        "Fever",
        "Sore throat",
        "Respiratory issues",
        "Stress"
      ],
      dosage: "2-3 fresh leaves daily or 1 teaspoon of dried leaves steeped in hot water for 5-10 minutes as tea, 2-3 times daily. For respiratory issues, can be combined with ginger and honey.",
      doshaEffect: {
        vata: {
          effect: "balancing"
        },
        pitta: {
          effect: "increasing"
        },
        kapha: {
          effect: "reducing"
        }
      }
    },
    {
      id: 6,
      name: "Turmeric",
      scientificName: "Curcuma longa",
      image: "/images/herbs/turmeric.jpg",
      relatedSymptoms: [
        "Inflammation",
        "Joint pain",
        "Arthritis",
        "Skin issues",
        "Digestive problems",
        "Wounds"
      ],
      dosage: "1/2 to 1 teaspoon with a pinch of black pepper in warm milk or water, once or twice daily. For joint pain, can be mixed with ghee and applied externally as well.",
      doshaEffect: {
        vata: {
          effect: "balancing"
        },
        pitta: {
          effect: "balancing"
        },
        kapha: {
          effect: "reducing"
        }
      }
    },
    {
      id: 7,
      name: "Shatavari",
      scientificName: "Asparagus racemosus",
      image: "/images/herbs/shatavari.jpg",
      relatedSymptoms: [
        "Hormonal imbalance",
        "Menopausal symptoms",
        "Dry skin",
        "Low energy",
        "Digestive issues",
        "Female reproductive health"
      ],
      dosage: "1/2 to 1 teaspoon of Shatavari powder with warm milk or water, once or twice daily. For reproductive health, best taken with ghee or honey.",
      doshaEffect: {
        vata: {
          effect: "reducing"
        },
        pitta: {
          effect: "reducing"
        },
        kapha: {
          effect: "increasing"
        }
      }
    }
  ];
  
  export const commonSymptoms = [
    "Headache",
    "Migraine",
    "Indigestion",
    "Bloating",
    "Constipation",
    "Diarrhea",
    "Nausea",
    "Vomiting",
    "Fatigue",
    "Weakness",
    "Joint pain",
    "Muscle pain",
    "Back pain",
    "Neck pain",
    "Arthritis",
    "Inflammation",
    "Common cold",
    "Cough",
    "Sore throat",
    "Fever",
    "Congestion",
    "Sinusitis",
    "Allergies",
    "Asthma",
    "Insomnia",
    "Sleep disturbances",
    "Anxiety",
    "Stress",
    "Depression",
    "Mood swings",
    "Skin rash",
    "Eczema",
    "Acne",
    "Dry skin",
    "Hair loss",
    "Dandruff",
    "Memory issues",
    "Poor concentration",
    "Mental fog",
    "Low energy",
    "Low immunity",
    "Female reproductive issues",
    "Menstrual cramps",
    "Menopause symptoms",
    "Hot flashes",
    "Night sweats",
    "Digestive issues",
    "Gas",
    "Acid reflux"
  ];