opera.isReady(function() {
    // EXPECTED FAILURE
    // ID feature not yet implemented
    var id, id2;

    test(function() {
	id = block.add("");
	assert_equals(id, 0, "The ID should be 0.")
    }, "Adding an empty rule to block list returns 0.");

    test(function() {
	id = block.add("  ");
	assert_equals(id, 0, "The ID should be 0.")
    }, "Adding a whitespace-only rule to block list returns 0.");

    test(function() {
	id = block.add("pattern");
	assert_true(id !== 0, "The ID (1) should not be 0.")
	assert_equals(typeof id, "number", "The ID should be a number.")
    }, "Adding non-empty rules to block list returns non-zero ID.");

    test(function() {
	id2 = block.add("pattern");
	assert_true(id2 !== 0, "The ID (2) should not be 0.")
	assert_true(id !== id2, "The IDs should not be equal.")
    }, "Adding duplicate rule to block list returns unique, non-zero ID.");
});