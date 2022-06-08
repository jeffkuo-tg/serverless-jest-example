const handler = require('../handler');

test('correct greeting is generated', () => {
  const mockpickLocale = jest.fn();
  mockpickLocale.mockReturnValueOnce("en");

  expect(handler.getLocalGreeting(mockpickLocale())).toBe("Hello!");
  expect(handler.getLocalGreeting("fr")).toBe("👋");
});
