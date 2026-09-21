/**
 * Public price visibility, set per project / edifice / floor / unit.
 *
 * - `inherit` — follow the nearest parent with an explicit choice (default).
 * - `hide`    — hide the price on public surfaces ("price on request").
 * - `show`    — show the price, even when a parent hides it.
 *
 * Resolution walks project → edifice → floor → unit; the level closest to the unit
 * with an explicit choice wins. When every level inherits, the price is shown.
 */
export const PRICE_VISIBILITY_VALUES = ["inherit", "hide", "show"] as const;
export type PriceVisibility = (typeof PRICE_VISIBILITY_VALUES)[number];

export const PRICE_VISIBILITY_LEVELS = ["project", "edifice", "floor", "unit"] as const;
export type PriceVisibilityLevel = (typeof PRICE_VISIBILITY_LEVELS)[number];

/** Resolved outcome for one record: whether its price is hidden and which level decided it. */
export type EffectivePriceVisibility = {
    hidden: boolean;
    /** Level whose explicit choice applied; `default` when every level inherits. */
    source: PriceVisibilityLevel | "default";
    /** `hidden_<source>` / `shown_<source>` — language-key suffix for panel display. */
    key: `${"hidden" | "shown"}_${PriceVisibilityLevel | "default"}`;
};
