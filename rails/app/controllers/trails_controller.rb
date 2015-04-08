class TrailsController < ApplicationController

  def index
    @trails = Trail.all
      respond_to do |format|
        format.json { render json: @trails }
      end
  end

end
