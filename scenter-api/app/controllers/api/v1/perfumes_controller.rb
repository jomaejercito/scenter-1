class Api::V1::PerfumesController < ApplicationController
  before_action :set_perfume, only: [:show, :update, :destroy]

  # GET /perfumes
  def index
    @perfumes = @brand.perfumes.all

    render json: @perfumes
  end

  # GET /perfumes/1
  def show
    @perfume = set_perfume
    render json: @perfume
  end

  # POST /perfumes
  def create
    @perfume = Perfume.new(perfume_params)

    if @perfume.save
      render json: @perfume, status: :created, location: @perfume
    else
      render json: @perfume.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /perfumes/1
  def update
    if @perfume.update(perfume_params)
      render json: @perfume
    else
      render json: @perfume.errors, status: :unprocessable_entity
    end
  end

  # DELETE /perfumes/1
  def destroy
    @perfume.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_perfume
      @perfume = Perfume.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def perfume_params
      params.require(:perfume).permit(:name, :image_url, :likes, :dislikes)
    end

    def find_brand
      @brand = Brand.find_by(id: params[:brand_id])
    end    

    def set_brand
      @brand = Brand.find(params[:brand_id])
    end    

end
