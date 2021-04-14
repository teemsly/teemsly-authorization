const hasAnyAuthority = (
  authorities: string[],
  hasAnyAuthotities: string[]
) => {
  // Check if authorities and hasAnyAuthorities is more than 0
  if (authorities && hasAnyAuthotities.length !== 0) {
    // check if hasAnyAuthority length more than 0, return true if the value is 0
    if (hasAnyAuthotities.length === 0) return true;

    // check with authorities is available on the hasAnyAuthorities
    return hasAnyAuthotities.some((authority) =>
      authorities.includes(authority)
    );
  }

  return false;
};

export default hasAnyAuthority;
