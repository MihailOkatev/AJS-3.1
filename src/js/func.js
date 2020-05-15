export default function checkHealth(Character) {
    if(Character.health > 50) {
        return "healthy";
    } else if (Character.health >= 15) {
        return "wounded";
    } else {
        return "critical";
    }
}
