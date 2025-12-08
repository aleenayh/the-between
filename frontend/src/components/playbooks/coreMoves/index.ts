import { type playbookKey, playbookKeys } from "../types";
import { CoreMoveCandleBearer } from "./CandleBearer";
import { CoreMoveLockAndKey } from "./LockAndKey";
import { CoreMoveNameless } from "./Nameless";

export const coreMoves: Record<playbookKey, React.ReactNode> = {
	[playbookKeys.candleBearer]: CoreMoveCandleBearer(),
	[playbookKeys.nameless]: CoreMoveNameless(),
	[playbookKeys.lockAndKey]: CoreMoveLockAndKey(),
};
