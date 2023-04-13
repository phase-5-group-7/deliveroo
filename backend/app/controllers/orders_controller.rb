class OrdersController < ApplicationController
    before_action :set_order, only [:show, :edit ,:update, :destroy]
  def index
    @orders = Order.all
  end

  def show
  end

  def new
    @order = Order.new
  end

  def create
    @order = current_user.orders.build(order_params)

    if @order.save
      redirect_to @order, notice: 'order was successfully created.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @order.update(order_params)
    else
      render :edit
    end
  end

  def destroy
    @order.destroy

  end

  private

  def set_order
    @order = order.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:username, :phone_number, :recepient_name, :recepient_phone_number, :description, :weight, :drop_off, :pick_up, :distance, :price, :status)
  end
end

