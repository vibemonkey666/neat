// Generated embedded-text module; original text is unchanged.
module.exports = "# Streaming - Ruby\n\n## Streaming\n\n```ruby\nstream = client.messages.stream(\n  model: :\"{{OPUS_ID}}\",\n  max_tokens: 64000,\n  messages: [{ role: \"user\", content: \"Write a haiku\" }]\n)\n\nstream.text.each { |text| print(text) }\n```\n\n---\n\n";
