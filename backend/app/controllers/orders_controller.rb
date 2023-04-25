class OrdersController < ApplicationController

  def index
    if current_user.admin?
      @orders = Order.all
    else
      @orders = current_user.orders
    end
    render json: @orders
  end

    def show
        @order = Order.find_by(id: params[:id])
        if current_user.admin
          if @order
            render json: @order
          else 
            render json: { message: "Order not found" }
          end
        elsif current_user && current_user.id != @order.user_id
          render json: { message: "Unauthorized" }, status: :unauthorized
        elsif current_user && current_user.id == @order.user_id
          render json: @order
        else
          render json: { message: "Order not found" }, status: :not_found 
        end
    end

    def create
        @order = Order.new(order_params)
        if @order.save
          render json: @order, status: :created
        else
          render json: {error: "Unable to create order"}, status: :unprocessable_entity
        end
    end

    def update
      @order = Order.find(params[:id])
      if current_user.admin
        if @order.update(order_params)
          render json: { message: 'Order updated successfully', data: @order }
        else
          render json: { error: 'Unable to update order' }, status: :unprocessable_entity
        end

      else
        if @order.update(update_params)
          render json: { message: 'Order updated successfully', data: @order }
        else
          render json: { error: 'Unable to update order' }, status: :unprocessable_entity
        end
      end
    end

    def destroy
      @order = Order.find(params[:id])
      if current_user.admin
        if @order.order_status == "DELIVERED"
          if @order.destroy
            render json: { message: 'Order deleted successfully' }
          else
            render json: { error: 'Failed to delete order' }, status: :unprocessable_entity
          end
        else
          render json: { error: 'Only delivered orders can be deleted by admin' }, status: :unprocessable_entity
        end
      else
        render json: { error: 'Delivered orders can only be deleted by admin!' }, status: :unprocessable_entity
      end
    end


      private

      def order_params
        params.require(:order).permit(:name, :phone_number, :recepient_name, :recepient_phone_no, :description, :order_status, :weight, :delivery_drop_off, :pick_up, :distance, :user_id)
      end

      def update_params
        params.require(:order).permit(:phone_number, :recepient_name, :recepient_phone_no, :description, :weight, :delivery_drop_off, :distance)
      end
    

    # Example of request to be sent to the server
    # {
    # "name": "Lincoln",
    #  "phone_number": "0720000000",
    #  "recepient_name": "Venus",
    #  "recepient_phone_no": "0735353535",
    #    "description": "Very Urgent",
    #    "weight": 20.0,
    #    "delivery_drop_off": "Ngong",
    #    "pick_up": "CBd",
    #    "distance": 15.0,
    #    "user_id": 1
    #  }
        
end
