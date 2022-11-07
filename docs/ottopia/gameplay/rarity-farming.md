# Rarity Scores

<header>
<meta property="og:title" content="Ottopia Whitepaper | Rarity Scores" />
<meta property="og:image" content="https://docs.ottopia.app/assets/images/hero-5be89801c9873fd27a1c718340251ed2.jpeg" />
<meta property="og:description" content="we are introducing an Otto rarity score. The rarity score is calculated according to the traits and wearable items each Otto possesses. Each trait and item has its own Base Rarity Score (BRS) and Relative Rarity Score (RRS)." />
</header>

Inspired by Aavegotchi, we are introducing an Otto rarity score. The rarity score is calculated according to the traits and wearable items each Otto possesses. Each trait and item has its own **[Base Rarity Score (BRS)](#brs)** and **[Relative Rarity Score (RRS)](#rrs)**.

## Base Rarity Score <a href="#brs" id="brs"></a>

**Base Rarity Score (BRS)** is an absolute value that is assigned to each trait and wearable item. The more rare traits or items an Otto has, the higher the base rarity score. 

Trait & Wearable item existance percentage & BRS range sheets:
![Rarity Sheets](img/RaritySheet.jpg)

### Legendary Otto NFT Bonus

Every legendary Otto pocesses a golden frame as a unique trait on the NFT. The golden frame represents that this Otto NFT is artist chosen and all customized, and it will give this Otto NFT extra **BRS 100 points**.

> Please note that if you change, or wear any equipment on the legendary Otto NFT, it means you decided to change the appearance of the Otto. Hence, the golden frame will be consealed, and the extra BRS 100 points will be subtracted until you make the Otto back to the original appearance.

If you don't know what is Legendary Otto NFT, you can check [Legendary Otto](./otto-nft#legendary-otto-nft) to learn more.


## Relative Rarity Score <a href="#rrs" id="rrs"></a>

**Relative Rarity Score (RRS)** is dynamic (changes based on specific variables) and is calculated based on the distribution of traits or items among Ottos currently in circulation. As more Ottos are minted via the portal, and more missions are completed, more rare items will eventually come into circulation. As traits or items come in and out of circulation, the relative score will reflect these changes accordingly. Legendary frame trait does not have RRS.

The formula below defines the Relative Rarity Score of a trait/item.

`RRS = 100*(1 - traitCount / maxTraitCount)`

*traitCount: The total amount of the item NFT equipped/owned by Ottos.*  
*maxTraitCount: The amount of the most equipped/owned item NFT among the same trait/item.*

---

The chart below demonstrates how the BRS and RRS are combined to determine a total rarity score for an Otto NFT:

![Example Sheets](img/traits_rarity_example.jpg)

---

The rarity score can let your Otto compete with other Otto's in Leaderboard of Rarity. The higher ranking your Otto is, the more rewards you will earn when the epoch ends. So gear up and join the rarity competition!

Here is the intro of what leaderboard is and how to win in the rarity competition : [Leaderboard](./leaderboard.md)
