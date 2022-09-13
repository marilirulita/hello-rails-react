class RootController < ApplicationController
  def index
    # @messages = Message.all
    @message = Message.find(rand(1..Message.count))

    render json: { greet: @message.text }, status: :ok
  end
end
