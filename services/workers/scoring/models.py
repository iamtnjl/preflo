from dataclasses import dataclass, asdict
from typing import Any

@dataclass
class Constraint:
    type: str; severity: str; category: str; description: str; implication: str
    def to_dict(self) -> dict: return asdict(self)

@dataclass
class FeasibilityResult:
    feasibility_score: float; demand_score: float; competition_score: float
    constraint_pressure: float; difficulty: str; time_range_min: int; time_range_max: int
    regime: str; success_band: dict[str, float]; constraints: list; conditions: list[str]
    def to_dict(self) -> dict[str, Any]:
        d = asdict(self); d["constraints"] = [c.to_dict() if isinstance(c, Constraint) else c for c in self.constraints]; return d
