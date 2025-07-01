# Mobile Banking App Redesign
> A complete UX overhaul for a mid-size credit-union’s iOS / Android app.

## TL;DR
- **Retention up 32 %** six months post-launch
- Added **Face ID / Android Biometric** auth, cutting login time to < 2 s
- Re-architected IA from 11 menus → 4 tab bar items, reducing “rage taps” 68 %

---

## 1 · Context
Members struggled to find basic features (cheque deposit, bill pay). App held a 2.3★ average rating and churned power users to neo-banks.

## 2 · Research & Insights
| Method | Participants | Key takeaway |
| ------ | ------------ | ------------ |
| Remote usability tests | 12 existing members | 8/12 failed to locate e-transfer within 30 s |
| Hot-jar click maps | 14 k sessions | 22 % dead-clicks on “More” kebab menu |
| Competitive teardown | 5 fintech apps | Tab bar + quick-actions card is industry norm |

> “I can never remember where e-transfer lives, so I open the desktop site instead.”   
> — Alex (participant #6)

## 3 · Process / Key Screens
![User flow](../images/banking/user-flow.png)

1. **Information Architecture**  
   Card-sort → Tree-test → 4 main tabs + context-aware FAB.
2. **Motion prototype** (Figma) to validate tap-targets & biometrics sheet.
3. **Dev hand-off** using Tailwind UI + React Native re-skinned for two brand palettes.

## 4 · Impact & Metrics
| Metric (30 d before vs after) | Before | After | Δ |
| ----------------------------- | ------ | ----- | --- |
| NPS mobile | 12 | **46** | +34 |
| App Store rating | 2.3★ | **4.5★** | +2.2 |
| Avg session length | 4 m 08 s | **2 m 41 s** | –35 % (goal-oriented) |

## 5 · Next Steps
- Roll biometric auth to Business accounts (needs SSO update).
- A/B test quick-pay widget vs. credit-card promo banner.

---

### Credits
Lead UX & UI – *You*  
iOS/Android Dev – Maya Chen, Rahim Patel  
