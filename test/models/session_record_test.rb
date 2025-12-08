require "test_helper"

class SessionRecordTest < ActiveSupport::TestCase
  def setup
    @session_record = SessionRecord.new(
      title: true,
      subtitle: "Uma jogatina muito legal",
      description: "Uma tarde muito agradavel com a familia",
      session_duration: 3.3
    )
  end

  test "Invalid title" do
    @session_record.title = true
    assert_not @session_record.valid?
  end

  test "Invalid session duration" do
    @session_record.session_duration = "3.3"
    assert_not @session_record.valid?
  end
end
