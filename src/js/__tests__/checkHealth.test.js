import checkHealth from '../func';

test('should be healthy', () => {
  const result = checkHealth({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('should be wounded', () => {
  const result = checkHealth({ name: 'Маг', health: 45 });

  expect(result).toBe('wounded');
});

test('should be critical', () => {
  const result = checkHealth({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});

test('should be wounded on 50%', () => {
  const result = checkHealth({ name: 'Маг', health: 50 });

  expect(result).toBe('wounded');
});

test('should be wounded on 15%', () => {
  const result = checkHealth({ name: 'Маг', health: 15 });

  expect(result).toBe('wounded');
});
