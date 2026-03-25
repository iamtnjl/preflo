def normalize(value: float, min_val: float, max_val: float) -> float:
    if max_val == min_val: return 0.5
    return clamp((value - min_val) / (max_val - min_val), 0, 1)

def clamp(value: float, min_val: float, max_val: float) -> float:
    return max(min_val, min(max_val, value))
