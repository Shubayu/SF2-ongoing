import { HitSplash } from "./HitSplash.js";

export class HeavyHitSplash extends HitSplash {
 frames = [
    [[14, 68, 15, 21], [7, 10]],
    [[38, 70, 27, 23], [13, 11]],
    [[73, 70, 27, 23], [13, 11]],
    [[106, 66, 32, 31], [16, 15]],

    [[160, 68, 15, 21], [7, 10]],
    [[185, 70, 27, 23], [13, 11]],
    [[222, 70, 27, 23], [13, 11]],
    [[255, 66, 32, 31], [16, 15]],
   ]
    
   constructor(args, time, entityList) {
    super(args, time, entityList)
   }
}