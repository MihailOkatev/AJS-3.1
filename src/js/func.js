export default function checkHealth(Character) {
  if (Character.health > 50) {
    return 'healthy';
  } if (Character.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
