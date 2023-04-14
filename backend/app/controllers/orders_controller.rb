class OrdersController < ApplicationController
    before_action :set_order, only: [:show, :edit, :update, :destroy]
  
    def index
      @orders = Order.all
      render json: @order
    end
  
    def create
      @order = Order.new(order_params)
  
      if @order.save
        app_response(status: :created, data: @order)
      else
        app_response(status: :unprocessable_entity, data: @order.errors, message: 'failed to create order')
      end
    end
  
    def update
      if @order.update(order_params)
        app_response(data: { info: 'updated order successfully' })
      else
        app_response(status: :unprocessable_entity, data: { info: 'something went wrong, could not update order' }, message: 'failed to update order')
      end
    end
  
    def destroy
      @order.destroy
      app_response(status: :no_content, message: 'success', data: { info: 'deleted order successfully' })
    end
  
    private
  
    def set_order
      @order = Order.find(params[:id])
    end
  
    def order_params
      params.require(:order).permit(:username, :phone_number, :recipient_name, :recipient_phone_number, :description, :weight, :drop_off, :pick_up, :distance, :price, :status)
    end
  end
  