require 'test_helper'

class CreateOrdersTest < ActiveSupport::TestCase
  def setup
    @order = Order.new(
      name: "",
      phone_number: "",
      recepient_name: "",
      recepient_phone_no: "",
      description: "",
      weight: 5.5,
      pick_up: 1,
      delivery_drop_off: 2,
     
    )
  end
  test "phone number should be present" do
    @order.phone_number = ""
    assert_not @order.valid?
  end
  test "recepient name should be present" do
    @order.recepient_name = ""
    assert_not @order.valid?
  end

  test "recepient phone number should be present" do
    @order.recepient_phone_no = ""
    assert_not @order.valid?
  end
  test "description should be present" do
    @order.description = ""
    assert_not @order.valid?
  end

  test "weight should be present" do
    @order.weight = nil
    assert_not @order.valid?
  end
  test "pick up should be present" do
    @order.pick_up = nil
    assert_not @order.valid?
  end

  test "delivery drop off should be present" do
    @order.delivery_drop_off = nil
    assert_not @order.valid?
  end